// eslint-disable-next-line react/prop-types
const FormikErr = ({ touched, errors }) => {
  if (!touched || !errors) return null;
  return (
    <small className="error-message text-sm text-red-500">
      {errors}
    </small>
  );
};

export default FormikErr;