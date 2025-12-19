# **\[웹사이트 기획서\] utomo : Invisible AI Workflow Service**

## **1\. 기획 개요 (Overview)**

* **사이트명:** utomo (유토모)  
* **타겟 오디언스:**  
  * **Primary:** 실무 효율화를 고민하는 기업 대표(CEO), DX/혁신 담당 임원  
  * **Secondary:** 반복 업무에 지친 팀장급 실무자  
* **컨셉 키워드:** Seamless(끊김 없는), Invisible(보이지 않는), Pragmatic(실용적인)  
* **목표:** 단순 정보 전달이 아닌, \*\*'무료 진단 신청(Lead Gen)'\*\*으로의 전환

## ---

**2\. 사이트 구조 (IA \- Information Architecture)**

**GNB (Global Navigation Bar)**

1. **Why utomo** (문제 제기 및 철학)  
2. **Solutions** (업무별 적용 사례)  
3. **Process** (도입 과정)  
4. **FAQ** (자주 묻는 질문)  
5. **Contact** (무료 진단 신청 \- **강조**)

## ---

**3\. 페이지별 상세 기획 (Detailed Specification)**

### **A. 메인 페이지 (Main Page)**

#### **Section 1: Hero (최상단)**

* **Visual Concept:**  
  * 화면 중앙에 익숙한 **Slack, Excel, Gmail** 아이콘이 떠 있습니다.  
  * 사용자가 아무것도 하지 않아도, 아이콘들 사이로 빛(데이터)이 연결되며 업무가 완료되는 모션 그래픽.  
* **Main Copy:**가장 강력한 AI는  
  당신이 쓰고 있는지조차 모르는 AI입니다.  
* **Sub Copy:**직원들에게 새로운 툴을 가르치지 마세요.  
  utomo는 당신의 Slack, Notion, Excel 속에 AI를 숨겨드립니다.  
* **CTA Button:** \[우리 회사 숨은 비효율 진단받기 (무료) →\]

#### **Section 2: The Pain (공감 형성)**

* **Layout:** 3단 가로 배치 (Icon \+ Text)  
* **Title:** **"왜 비싼 AI 툴을 도입하고도 실패할까요?"**  
* **Content:**  
  1. **새로운 로그인 (Login Fatigue):** "또 아이디를 만들어야 해?" 직원들은 낯선 툴을 켜는 것 자체를 싫어합니다.  
  2. **학습 곡선 (Learning Curve):** "이거 공부할 시간에 그냥 수동으로 할게요." 바쁜 실무자에게 교육은 짐입니다.  
  3. **단절된 워크플로우 (Disconnected):** AI에서 결과물을 복사해서 다시 엑셀로 붙여넣기... 여전히 '노가다'는 남습니다.

#### **Section 3: utomo's Approach (핵심 가치)**

* **Layout:** 지그재그 배치 (이미지 좌/우 교차)  
* **Copy 1: No New Tool**  
  * **Text:** utomo는 새로운 소프트웨어를 설치하지 않습니다. 사내 메신저(Slack/Teams)나 공유 문서(Google sheet)를 그대로 씁니다.  
  * **Visual:** Slack 채팅창에서 봇에게 말을 걸면 엑셀 파일이 뚝딱 만들어지는 이미지.  
* **Copy 2: Zero Learning Curve**  
  * **Text:** 프롬프트 엔지니어링? RAG? 그런 건 저희가 합니다. 직원들은 동료에게 부탁하듯 '일상어'로 업무를 지시하세요.  
  * **Visual:** 복잡한 프롬프트 코드들이 사라지고 "김대리, 이거 요약해줘"라는 말풍선만 남는 효과.

#### **Section 4: Social Proof (신뢰도)**

* **Title:** **"이미 똑똑한 기업들은 '도구' 대신 '자동화'를 샀습니다."**  
* **Content:**  
  * (숫자 강조) **연간 1,200시간** 절약 (A사 마케팅팀)  
  * (숫자 강조) **계약 검토 시간 90%** 단축 (B사 영업팀)  
  * *Logos:* 파트너사 로고 롤링 배너

### ---

**B. 솔루션 상세 (Solutions) \- *Input Data 반영***

*이 섹션은 탭(Tab) UI로 구성하여 사용자가 자신의 직무를 선택하게 합니다.*

#### **Tab 1: 마케팅/커머스 (Marketing)**

* **Pain Point:** 쏟아지는 신상품, 상세페이지 작성과 카피라이팅의 무한 반복.  
* **utomo Solution:**  
  * **Trigger:** Slack 채널에 상품 사진과 스펙 시트 업로드.  
  * **Action:** utomo가 이미지를 분석하고, 기존 브랜드 톤앤매너를 학습하여 상세페이지 초안 작성.  
  * **Result:** 1분 뒤, 완성된 원고가 Notion 페이지 링크로 도착.

#### **Tab 2: 경영지원/영업 (Business & Sales)**

* **Pain Point:** 복잡한 계약서 검토, 독소 조항 체크에 걸리는 병목 현상.  
* **utomo Solution:**  
  * **Trigger:** 특정 이메일 주소(legal@company...)로 계약서 PDF 전달.  
  * **Action:** 법률 AI 모델이 위험 조항을 스캐닝하고 수정 제안 사항 메모.  
  * **Result:** 빨간펜 첨삭이 완료된 요약본이 답장 이메일로 발송.

#### **Tab 3: 데이터 관리 (Data Management)**

* **Pain Point:** 각 팀에서 보내온 자료를 취합하고 포맷을 맞추는 데 쓰는 야근 시간.  
* **utomo Solution:**  
  * **Trigger:** 각 팀이 평소 쓰던 양식대로 구글 드라이브에 업로드.  
  * **Action:** utomo가 데이터를 추출, 정제하여 마스터 엑셀 파일에 자동 기입.  
  * **Result:** 매주 금요일 오후 5시, 경영진용 시각화 리포트 자동 생성.

### ---

**C. 프로세스 & 가격 (Process & Pricing)**

#### **Process Section**

* **Title:** **"도입까지, 단 1주일이면 충분합니다."**  
* **Step 1: 업무 진단 (Audit)**  
  * 비효율적으로 반복되는 업무를 인터뷰를 통해 찾아냅니다.  
* **Step 2: 커스텀 세팅 (Custom Setup)**  
  * 귀사의 기존 툴(Slack, Notion 등)에 API를 연결하고 프롬프트를 최적화합니다.  
* **Step 3: 온보딩 (Onboarding)**  
  * 교육은 필요 없습니다. "이제 여기서 말만 거시면 됩니다"라고 안내하면 끝입니다.

#### **Pricing Policy**

* **Copy:** **"개발비 대신, 아낀 인건비의 일부만 받습니다."**  
* **Model:**  
  * **Starter:** 초기 세팅비 \+ 월 구독료 (유지보수 포함)  
  * **Enterprise:** 맞춤형 대규모 구축 (별도 견적)

### ---

**D. 문의하기 (Contact) \- *핵심 기능***

* **Title:** **utomo 무료 워크플로우 진단**  
* **Desc:** 어떤 업무를 자동화해야 할지 모르겠다면, 저희가 찾아드립니다.  
* **Form Field (입력 항목):**  
  1. 회사명 / 담당자명 / 연락처  
  2. **현재 사내에서 주로 쓰는 툴은? (복수 선택)**  
     * \[ \] Slack / Teams / 잔디  
     * \[ \] Notion / Jira / Confluence  
     * \[ \] Excel / Google Sheets  
     * \[ \] Email (Outlook/Gmail)  
  3. **가장 해결하고 싶은 문제는? (자유 기재)**  
     * (Placeholder: 예: 상품 등록이 너무 오래 걸려요, 매일 엑셀 취합이 힘들어요)  
* **Submit Button:** \[진단 리포트 신청하기\]

## ---

**4\. 디자인 가이드라인 (Tone & Manner)**

* **Visual Concept:**  
  * **"Dark Mode & Neon Accent"**: 어두운 배경을 베이스로 하여 전문적이고 집중도 높은 분위기를 연출합니다. 여기에 강렬한 네온 옐로우를 포인트 컬러로 사용하여 기술적인 혁신성과 트렌디함을 강조합니다. 마치 어두운 밤하늘에 빛나는 스마트한 빛줄기처럼 AI가 업무를 밝혀주는 느낌을 시각화합니다.  
* **Color Palette (Updated):**  
  * **Primary Background:** **Black (\#000000) or Very Dark Grey (\#121212)** \- 전체적인 배경색으로 사용하여 깊이감과 전문성을 부여합니다. 로고의 어두운 배경과 통일감을 이룹니다.  
  * **Accent Color:** **Neon Yellow (\#DFFF00 or 유사한 고채도 노랑)** \- **\[가장 중요\]** 제공해주신 로고의 노란색입니다. CTA 버튼(무료 진단 신청 등), 중요한 키워드 강조, 아이콘, 로딩 애니메이션 등의 포인트 요소에 사용하여 시선을 사로잡고 행동을 유도합니다.  
  * **Secondary Background / Card UI:** **Dark Grey (\#1E1E1E, \#2C2C2C)** \- 섹션 구분이나 카드 형태의 콘텐츠(유스케이스, 프로세스 단계 등) 배경으로 사용하여 메인 배경과 은은한 대비를 줍니다.  
  * **Text Color (Main):** **White (\#FFFFFF)** \- 어두운 배경 위에서 가장 높은 가독성을 제공합니다.  
  * **Text Color (Sub):** **Light Grey (\#B0B0B0, \#E0E0E0)** \- 본문 텍스트나 부가 설명에 사용하여 눈의 피로를 줄이고 계층 구조를 표현합니다.  
* **Typography:**  
  * 가독성이 높고 현대적인 느낌의 산세리프(Gothic) 서체 (예: Pretendard, Montserrat, Noto Sans KR)를 유지합니다.  
  * 헤드라인에 네온 옐로우 컬러를 적용하거나, 텍스트에 은은한 네온 글로우(Glow) 효과를 주어 미래지향적인 느낌을 더할 수 있습니다.  
* **UI/UX Elements:**  
  * **Buttons:** 네온 옐로우 배경에 검은색 텍스트로 디자인하여 클릭 유도율을 극대화합니다. (예: \[ **무료 진단 신청하기** \])  
  * **Icons & Graphics:** 아이콘은 네온 옐로우 라인 아트 스타일로 통일합니다. 메인 비주얼의 '연결되는 빛' 효과도 네온 옐로우 색상으로 표현합니다.  
  * **Imagery:** 업무 화면 캡처(Slack, Excel 등)는 어두운 테마로 보여주고, 그 위에 네온 옐로우 색상의 하이라이트나 주석이 달리는 연출을 통해 AI의 개입을 시각화합니다.

## ---

**5\. 카피라이팅 전략 요약 (Copy Strategy)**

1. **Anti-SaaS:** "새로운 툴 \= 스트레스"라는 공식을 활용하여, 우리는 \*\*'Anti-Tool'\*\*임을 강조합니다.  
2. **Empowerment:** AI가 사람을 대체하는 것이 아니라, 직원을 \*\*'단순 노동에서 해방'\*\*시킨다는 뉘앙스를 유지합니다.  
3. **Result-Oriented:** "GPT-4를 씁니다" 같은 기술 용어 대신, \*\*"1시간 걸릴 일을 3초로 줄입니다"\*\*라는 결과 중심의 언어를 사용합니다.

