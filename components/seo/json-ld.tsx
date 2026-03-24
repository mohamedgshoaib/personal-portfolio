type JsonLdValue =
  | boolean
  | number
  | string
  | null
  | JsonLdObject
  | JsonLdValue[]

type JsonLdObject = {
  [key: string]: JsonLdValue
}

function serializeJsonLd(data: JsonLdObject) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
