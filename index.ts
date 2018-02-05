export interface IRequestmodelSchemaOpt {
  label: String
  value: String
}


export interface IRequestmodelSchema {
  type: string
  label: string
  value: string
  placeholder?: string
  options?: IRequestmodelSchemaOpt[]
  required?: boolean
}


export interface IFormData {

  value: string
  label: string

}


export function validate(formdata: IFormData[], formschema: IRequestmodelSchema[]): { ok: true } | { errors: IRequestmodelSchema[] } {

  const requireds: IRequestmodelSchema[] = []

  for (let s = 0; s < formschema.length; s++) {
    if (formschema[s].required) {
      let exists = false
      for (let d = 0; d < formdata.length; d++) {
        if (formdata[d].label === formschema[s].label) {
          switch (formschema[s].type) {
            case 'checkbox':
              exists = true
              break
              case 'text':
              if (formdata[d].value && formdata[d].value !== '' && formdata[d].value.length > 8) exists = true
              case 'string':
              if (formdata[d].value && formdata[d].value !== '' && formdata[d].value.length > 3) exists = true
              break
            case 'email':
              if (formdata[d].value && formdata[d].value !== '' && formdata[d].value.split('@').length > 1 && formdata[d].value.split('@')[1].split('.').length > 1) exists = true
              break
            default:
              if (formdata[d].value && formdata[d].value !== '') exists = true
              break
          }
        }
      }
      if (!exists) requireds.push(formschema[s])
    }
  }

  if (requireds.length > 0) {
    return { errors: requireds }

  }
  return { ok: true }

}

