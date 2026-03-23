function CookieConsent({ isOpen, onDecision }) {
    if (!isOpen) {
        return null;
    }

    return (
        <aside
            className="cookie-consent"
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            aria-live="polite"
        >
            <p className="cookie-consent__eyebrow">隱私設定</p>
            <h2 id="cookie-consent-title" className="cookie-consent__title">
                我們使用 Cookie 優化你的體驗
            </h2>
            <p id="cookie-consent-description" className="cookie-consent__description">
                目前僅保存你的同意偏好，不會接入任何第三方追蹤服務。你可以選擇只啟用必要 Cookie，或接受全部 Cookie 以便未來啟用進階功能。
            </p>
            <div className="cookie-consent__actions">
                <button
                    type="button"
                    className="btn btn--outline btn--sm cookie-consent__button"
                    onClick={() => onDecision('essential')}
                >
                    僅必要 Cookie
                </button>
                <button
                    type="button"
                    className="btn btn--primary btn--sm cookie-consent__button"
                    onClick={() => onDecision('all')}
                >
                    接受全部 Cookie
                </button>
            </div>
        </aside>
    );
}

export default CookieConsent;
