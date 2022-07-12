import Alert from '@mui/material/Alert';

// eslint-disable-next-line import/prefer-default-export
export const renderItemList = (names: any[]) => names.map((c) => (
  <div
    key={`${c.first_name}-div`}
    style={{
      padding: 5,
    }}
  >
    <Alert
      key={`${c.first_name}-alert`}
      severity="success"
    >
      This is
      {' '}
      {c.first_name}
      {' '}
      — Nice To Meet You!
    </Alert>
  </div>
));
