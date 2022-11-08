import React, { useState } from 'react'
// *Ejecuta la consulta.
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
  //  useQuery jala 3 datos, data, loading y extrae error si la api falla.
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log("Mis datos de query son:", data?.categories[0]?.children)
  console.log("Mi slog selecionado es:", slug);

  return loading ?
    <div>Loading.. </div>
    :
    <div className='flex'>
      <DepartmentGroup departments={data?.categories[0]?.children} handleSetSlug={setSlug} />

      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Que buscas?"
        displayMode="search-and-clear-buttons"
      />

    </div>

}

export default DepartmentSearch
