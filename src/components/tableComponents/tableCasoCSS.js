import styled from 'styled-components';

export const Styles = styled.div`
  /* padding: 1rem; */

  html, body {
  height: 100%;
}

  .colorRechazado{
	  background-color: red;
  }
  .colorRevision{
    background-color: yellow;
  }
  .colorEnProceso{
    background-color: lightgreen;
  }
  .colorAprobado{
    background-color: green;
  }
  .colorEnCliente{
    background-color: orange;
  }


  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.1rem 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

`