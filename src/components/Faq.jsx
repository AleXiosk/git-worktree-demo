import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';

function Faq() {
    const [activeId, setActiveId] = useState(() => FAQ_ITEMS[0]?.id ?? '');
    const activeItem = FAQ_ITEMS.find((item) => item.id === activeId) ?? FAQ_ITEMS[0];

    if (!activeItem) {
        return null;
    }

    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header faq__header">
                    <span className="section-header__badge">常見問答</span>
                    <h2 id="faq-title" className="section-header__title">
                        導入、遷移、權限與 Cookie 使用，一次說清楚
                    </h2>
                    <p className="section-header__desc">
                        這些問題最常出現在 CRM 導入評估階段。你可以先快速查看答案，再決定是否要安排更深入的流程盤點。
                    </p>
                </div>

                <div className="faq__layout">
                    <ul className="faq__list" role="list" aria-label="常見問題列表">
                        {FAQ_ITEMS.map((item, index) => {
                            const isActive = item.id === activeItem.id;

                            return (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        className={`faq__item ${isActive ? 'faq__item--active' : ''}`}
                                        onClick={() => setActiveId(item.id)}
                                        aria-pressed={isActive}
                                    >
                                        <span className="faq__item-index">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="faq__item-content">
                                            <span className="faq__item-category">{item.category}</span>
                                            <span className="faq__item-question">{item.question}</span>
                                        </span>
                                        <span className="faq__item-status">
                                            {isActive ? '目前查看中' : '查看答案'}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <article className="faq__panel" aria-live="polite">
                        <span className="faq__panel-label">{activeItem.category}</span>
                        <h3 className="faq__panel-title">{activeItem.question}</h3>
                        <p className="faq__panel-answer">{activeItem.answer}</p>

                        <ul className="faq__panel-points" role="list">
                            {activeItem.highlights.map((point) => (
                                <li key={point} className="faq__panel-point" role="listitem">
                                    <span className="faq__point-check" aria-hidden="true">✓</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="faq__panel-note">
                            <p>如果你的流程更複雜，我們可以在 Demo 中一起盤點資料結構與導入方式。</p>
                            <a href="#demo" className="faq__panel-link">
                                預約導入諮詢
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Faq;
