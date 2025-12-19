const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  try {
    const { companyName, contactPerson, phoneNumber, email, tools, problemDescription } = req.body;

    const toolsList = tools.map(t => t.name).join(', ') || '없음';

    const emailContent = `
      <h2>워크플로우 진단 신청</h2>
      <p><strong>회사명:</strong> ${companyName}</p>
      <p><strong>담당자명:</strong> ${contactPerson}</p>
      <p><strong>연락처:</strong> ${phoneNumber}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>현재 사용 중인 도구:</strong> ${toolsList}</p>
      <p><strong>해결하고 싶은 업무 과제:</strong></p>
      <p>${problemDescription}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jinmoo@utomo.co.kr',
      subject: `[워크플로우 진단 신청] ${companyName} - ${contactPerson}`,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: '이메일 전송 실패', details: error });
    }

    res.json({ success: true, message: '이메일이 성공적으로 전송되었습니다.', data });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: '서버 오류가 발생했습니다.', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});

