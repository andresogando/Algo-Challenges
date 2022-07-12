import { renderItemList, useUser } from '@hooks/user';

import Container from '@mui/material/Container';
import { useRouter } from 'next/router';

export default function IdPage() {
  const { user, isLoading, isError } = useUser();

  const {
    query: { id },
  } = useRouter();

  if (isLoading) return <div>Loading . . . </div>;
  if (isError) return <div>{isError}</div>;

  return (
    <div id="Home" style={{ padding: 100 }}>
      <Container maxWidth="sm">
        <div>
          {' '}
          Hola ID:
          {' '}
          <i>
            {' '}
            <strong>
              {' '}
              {id}
              {' '}
            </strong>
            {' '}
          </i>
          {' '}
        </div>

        <div id="params">{renderItemList(user)}</div>
      </Container>
    </div>
  );
}
