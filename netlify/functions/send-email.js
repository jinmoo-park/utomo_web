const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // POST 요청만 허용
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { companyName, contactPerson, phoneNumber, email, tools, problemDescription } = JSON.parse(event.body);

    const toolsList = tools && tools.length > 0 
      ? tools.map(t => t.name).join(', ') 
      : '없음';

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
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: '이메일 전송 실패', details: error }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: '이메일이 성공적으로 전송되었습니다.', 
        data 
      }),
    };
  } catch (error) {
    console.error('Server error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '서버 오류가 발생했습니다.', 
        details: error.message 
      }),
    };
  }
};

