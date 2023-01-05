export default function ErrorPage(props) {
  const { error } = props

  return (
    <div id="error-page">
      <h1>{error.status}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}