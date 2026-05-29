import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const PROPIEDADES_DB = process.env.NOTION_PROPIEDADES_DB!;
const COMPRADORES_DB = process.env.NOTION_COMPRADORES_DB!;
const VENDEDORES_DB = process.env.NOTION_VENDEDORES_DB!;

export interface Propiedad {
  id: string;
  dirección: string;
  tipo: string;
  precio: number;
  m2Construcción: number;
  m2Terreno: number;
  dormitorios: number;
  baños: number;
  estacionamientos: number;
  especialidades: string[];
  derechosAgua: string;
  documentacionCompleta: boolean;
  estado: string;
  descripción: string;
  notasZona: string;
  foto: string;
}

// ✅ CORRECTO: Usar databases.query() NO search()
export async function getPropiedadesDisponibles(): Promise<Propiedad[]> {
  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${PROPIEDADES_DB}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            and: [
              {
                property: "Estado",
                select: {
                  equals: "Disponible",
                },
              },
            ],
          },
          sorts: [
            {
              property: "Fecha Publicación",
              direction: "descending",
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    return data.results
      .map((page: any): Propiedad | null => {
        try {
          const props = page.properties;

          return {
            id: page.id,
            dirección:
              props.Dirección?.title?.[0]?.plain_text || "Sin dirección",

            tipo:
              props["Tipo Propiedad"]?.select?.name || "Propiedad",

            precio:
              props["Precio Venta"]?.number || 0,

            m2Construcción:
              props["M² Construcción"]?.number || 0,

            m2Terreno:
              props["M² Terreno"]?.number || 0,

            dormitorios:
              props.Dormitorios?.number || 0,

            baños:
              props.Baños?.number || 0,

            estacionamientos:
              props.Estacionamientos?.number || 0,

            especialidades:
              props.Especialidades?.multi_select?.map((s: any) => s.name) || [],

            derechosAgua:
              props["Derechos Agua"]?.select?.name || "No",

            documentacionCompleta:
              props["Documentación Completa"]?.checkbox || false,

            estado:
              props.Estado?.select?.name || "Disponible",

            descripción:
              props["Descripción Publicación"]?.rich_text?.[0]?.plain_text ||
              "Sin descripción",

            notasZona:
              props["Notas Zona"]?.rich_text?.[0]?.plain_text || "",

            foto:
              props["Foto Principal"]?.files?.[0]?.file?.url ||
              "/placeholder.jpg",
          };
        } catch (err) {
          console.error(err);
          return null;
        }
      })
      .filter((p): p is Propiedad => p !== null);
  } catch (error) {
    console.error("Error fetching propiedades:", error);
    return [];
  }
}

// ✅ CORRECTO: Obtener una propiedad específica por ID
export async function getPropiedadPorId(id: string): Promise<Propiedad | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    const props = (page as any).properties;

    console.log(props["Precio Venta"]);

    return {
      id: page.id,
      dirección: props.Dirección?.title[0]?.text?.content || "Sin dirección",
      tipo: props["Tipo Propiedad"]?.select?.name || "Propiedad",
      precio: props["Precio Venta"]?.number || 0,
      m2Construcción: props["M² Construcción"]?.number || 0,
      m2Terreno: props["M² Terreno"]?.number || 0,
      dormitorios: props.Dormitorios?.number || 0,
      baños: props.Baños?.number || 0,
      estacionamientos: props.Estacionamientos?.number || 0,
      especialidades: props.Especialidades?.multi_select?.map((s: any) => s.name) || [],
      derechosAgua: props["Derechos Agua"]?.select?.name || "No",
      documentacionCompleta: props["Documentación Completa"]?.checkbox || false,
      estado: props.Estado?.select?.name || "Disponible",
      descripción:
        props["Descripción Publicación"]?.rich_text[0]?.text?.content ||
        "Sin descripción",
      notasZona: props["Notas Zona"]?.rich_text[0]?.text?.content || "",
      foto: props["Foto Principal"]?.files[0]?.file?.url || "/placeholder.jpg",
    };
  } catch (error) {
    console.error("Error fetching propiedad:", error);
    return null;
  }
}

// ✅ Obtener compradores
export async function getCompradores(): Promise<any[]> {
  try {
    const response = await notion.databases.query({
      database_id: COMPRADORES_DB,
      filter: {
        property: "Etapa",
        select: {
          is_not_empty: true,
        },
      },
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        nombre: props.Nombre?.title[0]?.text?.content || "",
        etapa: props.Etapa?.select?.name || "",
        presupuesto: props.Presupuesto?.number || 0,
        email: props.Email?.email || "",
        teléfono: props.Teléfono?.phone_number || "",
      };
    });
  } catch (error) {
    console.error("Error fetching compradores:", error);
    return [];
  }
}

// ✅ Crear nuevo comprador desde formulario
export async function crearCompradorDesdeFormulario(datos: {
  nombre: string;
  teléfono: string;
  email: string;
  presupuesto?: number;
  etapa?: string;
  propiedadesInterés?: string;
  notas?: string;
}): Promise<boolean> {
  try {
    await notion.pages.create({
      parent: { database_id: COMPRADORES_DB },
      properties: {
        Nombre: {
          title: [{ text: { content: datos.nombre } }],
        },
        Teléfono: {
          phone_number: datos.teléfono,
        },
        Email: {
          email: datos.email,
        },
        Presupuesto: datos.presupuesto
          ? { number: datos.presupuesto }
          : undefined,
        Etapa: datos.etapa
          ? { select: { name: datos.etapa } }
          : { select: { name: "Lead" } },
        "Fecha Contacto": {
          date: { start: new Date().toISOString().split("T")[0] },
        },
        Notas: datos.notas
          ? { rich_text: [{ text: { content: datos.notas } }] }
          : undefined,
      },
    });

    console.log(`Comprador ${datos.nombre} creado en Notion`);
    return true;
  } catch (error) {
    console.error("Error creating comprador:", error);
    return false;
  }
}

// ✅ Obtener estadísticas (para dashboard)
export async function getEstadísticas() {
  try {
    const [propiedades, compradores] = await Promise.all([
      getPropiedadesDisponibles(),
      getCompradores(),
    ]);

    return {
      totalPropiedades: propiedades.length,
      totalCompradores: compradores.length,
      propiedadesDisponibles: propiedades.filter((p) => p.estado === "Disponible").length,
      compradorsPorEtapa: compradores.reduce((acc: any, c) => {
        acc[c.etapa || "Sin etapa"] = (acc[c.etapa || "Sin etapa"] || 0) + 1;
        return acc;
      }, {}),
    };
  } catch (error) {
    console.error("Error fetching estadísticas:", error);
    return null;
  }
}