import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  console.log("mi grupo de departamento es:", departments)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  };

  const CSS_HANDLES = [
    "departmentGroup__container",
    "departmentGroup__element",
    "departmentGroup__option"
  ]
  const handles = useCssHandles(CSS_HANDLES)


  const departmentOptions: any = departments.map((department: Category) => {

    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>

    )
  })
  return (
    <div className={handles["departmentGroup__container"]}>
      <select className={handles["departmentGroup__element"]} onChange={onHandleSetSlug} defaultValue="value0">
        <option className={handles["departmentGroup__option"]} disabled value="value0">
          Seleccionar una opción
        </option>
        {departmentOptions}
      </select>
    </div>
  )
}

export default DepartmentGroup
