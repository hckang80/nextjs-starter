'use client';

import { createClient } from '@/utils/supabase/client';
import { Button, Card, Grid, Text } from '@radix-ui/themes';
import styles from './page.module.css';

export default function LoginContainer() {
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`
      }
    });
    if (error) {
      console.error('Google OAuth login error:', error);
    }
  };

  return (
    <Grid align='center' className={styles.root} p='5'>
      <Card size='3'>
        <Text as='div' size='6' weight='bold' mb='2'>
          Login
        </Text>
        <Text as='div' color='gray' size='2'>
          This demo uses Google for authentication.
        </Text>

        <Button
          onClick={handleGoogleLogin}
          mt='5'
          color='tomato'
          size='3'
          className={styles.button}
        >
          Google
        </Button>
      </Card>
    </Grid>
  );
}
