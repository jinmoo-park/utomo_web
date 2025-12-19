# Resend 도메인 설정 가이드

## 개요
Resend에서 도메인을 추가하면 실제 도메인으로 이메일을 보낼 수 있습니다. 이 가이드는 도메인 설정 방법을 안내합니다.

## 설정 단계

### 1. 도메인 이름 입력
**Name 필드**에 사용할 도메인 또는 서브도메인을 입력하세요:

- **옵션 1**: 메인 도메인 사용
  - 예: `utomo.co.kr`
  
- **옵션 2**: 서브도메인 사용 (권장)
  - 예: `updates.utomo.co.kr`
  - 예: `mail.utomo.co.kr`
  - 예: `noreply.utomo.co.kr`

**권장사항**: 서브도메인 사용을 권장합니다. 메인 도메인은 다른 용도로 사용할 수 있고, 서브도메인은 이메일 전송 전용으로 분리할 수 있어 관리가 편리합니다.

### 2. Region 선택
**Region** 드롭다운에서 다음을 선택하세요:
- `Tokyo (ap-northeast-1)` - 한국에서 가장 가까운 리전

### 3. 도메인 추가
"+ Add Domain" 버튼을 클릭하여 도메인을 추가합니다.

### 4. DNS 레코드 설정 (중요!)
도메인 추가 후 Resend가 제공하는 DNS 레코드를 도메인 관리 페이지에 추가해야 합니다.

일반적으로 다음 레코드가 필요합니다:
- **SPF 레코드** (TXT 타입)
- **DKIM 레코드** (TXT 타입)
- **DMARC 레코드** (TXT 타입, 선택사항)

**설정 방법**:
1. Resend 대시보드에서 제공하는 DNS 레코드를 복사
2. 도메인 관리 페이지 (예: 가비아, 후이즈 등)에 접속
3. DNS 설정에서 해당 레코드들을 추가
4. DNS 전파 대기 (보통 몇 분~몇 시간 소요)

### 5. 서버 코드 수정
도메인 설정이 완료되면 `server.js` 파일의 `from` 주소를 변경해야 합니다:

```javascript
const { data, error } = await resend.emails.send({
  from: 'noreply@updates.utomo.co.kr', // 설정한 도메인으로 변경
  to: 'jinmoo@utomo.co.kr',
  subject: `[워크플로우 진단 신청] ${companyName} - ${contactPerson}`,
  html: emailContent,
});
```

**변경 전**:
```javascript
from: 'onboarding@resend.dev'  // Resend 기본 도메인
```

**변경 후**:
```javascript
from: 'noreply@updates.utomo.co.kr'  // 설정한 도메인
```

## 빠른 테스트 방법

도메인 설정 전에 테스트하려면:
- 현재 `onboarding@resend.dev`로도 전송 가능 (Resend 기본 도메인)
- 단, 일부 이메일 서비스에서 스팸으로 분류될 수 있음

## 추천 설정

1. **서브도메인 사용**: `updates.utomo.co.kr` 또는 `mail.utomo.co.kr`
2. **Region**: `Tokyo (ap-northeast-1)`
3. **DNS 레코드 설정 완료 후** 서버 코드의 `from` 주소 변경

## 주의사항

- DNS 레코드 설정이 완료되지 않으면 이메일 전송이 실패할 수 있습니다.
- DNS 전파에는 시간이 걸릴 수 있으니 인내심을 가지세요.
- 프로덕션 환경에서는 반드시 실제 도메인을 사용하세요.

## 문제 해결

- **이메일이 전송되지 않는 경우**: DNS 레코드가 제대로 설정되었는지 확인
- **스팸으로 분류되는 경우**: SPF, DKIM 레코드가 올바르게 설정되었는지 확인
- **도메인 인증 실패**: Resend 대시보드에서 도메인 상태 확인

