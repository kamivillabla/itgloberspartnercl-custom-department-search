import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"


import DepartmentGroup from './DepartmentGroup'

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")

  const CSS_HANDLES = [
    "departmentSearch__element"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  console.log("Mi slug seleccionado es", slug)
  return loading ?
    <div className={handles["departmentSearch__element"]}>Loading ...</div>
    :
    <div className='flex'>
      <DepartmentGroup departments={data?.categories[0]?.children} handleSetSlug={setSlug} />
      <SearchBar customSearchPageUrl={slug} placeholder="¿Qué buscas?" displayMode="search-and-clear-buttons" />
    </div>
}

export default DepartmentSearch
