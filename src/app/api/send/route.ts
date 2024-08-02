import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body: string = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Information Support <info@mostaqbli.co>",
      to: ["Mostaqbli@gmail.com"],
      subject: "وصلكم سؤالل!!!",
      react: EmailTemplate({ question: body }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
