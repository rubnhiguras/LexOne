import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lexone.mobile',
  appName: 'LexOne',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;