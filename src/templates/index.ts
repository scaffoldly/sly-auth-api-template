// eslint-disable-next-line import/prefer-default-export
export const templates: {
  [key: string]: { SubjectPart: string; HtmlPart: string; TextPart: string };
} = {
  totp: {
    SubjectPart: '{{Organization}}: Your temporary login code is {{OTP}}',
    HtmlPart:
      "<h2>{{Organization}} Login</h2><p>Copy and paste this temporary login code:</p><pre>{{OTP}}</pre><p>If you didn't try to login, you can safely ignore this email.</p>",
    TextPart:
      "Copy and paste this temporary login code:\n\n{{OTP}}\n\nIf you didn't try to login, you can safely ignore this email.\n\n{{Organization}}",
  },
};
