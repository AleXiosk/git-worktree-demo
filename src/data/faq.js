export const FAQ_ITEMS = [
    {
        id: 'onboarding',
        category: '導入流程',
        question: 'SalesPilot 導入通常需要多久？',
        answer:
            '多數 10 到 50 人的業務團隊可在 7 到 14 天內完成上線。若你已經有既定的銷售階段、欄位規則與報表需求，我們會先協助整理流程，再安排資料匯入、權限設定與教育訓練。',
        highlights: [
            'Kickoff 盤點現有流程、欄位與 KPI',
            '先完成沙盒驗證，再安排正式環境上線',
            '上線首週提供管理者與第一線團隊陪跑',
        ],
    },
    {
        id: 'migration',
        category: '資料遷移',
        question: '可以把 Excel、Google Sheet 或舊 CRM 的資料搬進來嗎？',
        answer:
            '可以。SalesPilot 支援以 CSV 匯入客戶、商機、活動紀錄與自訂欄位，也能依照舊系統欄位做對應映射。正式匯入前，建議先抽樣驗證資料格式、去重規則與擁有者分派邏輯。',
        highlights: [
            '支援聯絡人、公司、商機與活動紀錄匯入',
            '可設定欄位對應、必填規則與去重條件',
            '大型遷移案可分批匯入，降低切換風險',
        ],
    },
    {
        id: 'permissions',
        category: '權限控管',
        question: '不同部門或角色能設定不同權限嗎？',
        answer:
            '可以。你可以依角色、團隊與資料擁有權定義可見範圍，限制誰能查看價格、編輯商機、匯出報表或調整自動化流程。Enterprise 方案也支援更細的稽核與單一登入需求。',
        highlights: [
            '依角色限制檢視、編輯、匯出與管理能力',
            '可按團隊或資料擁有者切分可見資料範圍',
            '支援 SSO / SAML 與操作稽核日誌',
        ],
    },
    {
        id: 'integrations',
        category: '整合能力',
        question: 'SalesPilot 能和既有的信箱、通訊或協作工具整合嗎？',
        answer:
            '可以，常見情境包含 Gmail、Outlook、LINE、Slack 與 Google Calendar。你可以把信件往來、提醒通知與會議排程同步到同一條客戶時間軸，避免客服、業務與主管各看各的資料。',
        highlights: [
            '整合郵件、行事曆與團隊通知流程',
            '重要跟進可自動推播到 LINE 或 Slack',
            '同一位客戶的互動紀錄可集中檢視',
        ],
    },
    {
        id: 'cookies',
        category: 'Cookie 使用',
        question: '你們會怎麼使用 Cookie？是否會拿來做第三方廣告投放？',
        answer:
            'SalesPilot 主要使用 Cookie 維持登入狀態、保護帳號安全、記住介面偏好，以及衡量產品功能的基本使用情況。我們不會把客戶 CRM 內的業務資料拿去做第三方廣告定向，若你有法遵需求，也能在導入時一起確認 Cookie 與追蹤設定。',
        highlights: [
            '必要 Cookie 用於登入驗證與安全防護',
            '偏好設定可記住語系、篩選條件與版面選項',
            '分析用途聚焦產品改善，不碰 CRM 客戶資料外投',
        ],
    },
    {
        id: 'support',
        category: '上線支援',
        question: '上線後如果流程要調整，是否還有人協助？',
        answer:
            '有。SalesPilot 會依方案提供客服支援、最佳實務建議與版本更新說明。當你的團隊從單一管線擴充到多品牌、多區域或更複雜的權限架構時，也能逐步調整設定，不必整套重建。',
        highlights: [
            '可隨團隊成長調整管線、欄位與自動化',
            '提供教育訓練素材與管理者最佳實務',
            '複雜情境可透過 Demo 與顧問一起盤點',
        ],
    },
];
