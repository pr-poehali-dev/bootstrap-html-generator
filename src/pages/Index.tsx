import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div style={{ fontFamily: "'Golos Text', sans-serif", backgroundColor: '#fffbf0', minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#f5f0e0', borderBottom: '1px solid #e8e0c8', padding: '8px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <span style={{ fontSize: '13px', color: '#888' }}>Главная</span>
        </div>
      </div>

      {/* Header */}
      <header style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0e8d0',
        padding: '0',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '18px 0' }}>
            <span style={{ fontSize: '28px' }}>🐾</span>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '22px',
              color: '#1a1a1a',
            }}>Котокафе</span>
          </div>

          {/* CTA Button */}
          <button
            style={{
              backgroundColor: '#f07a20',
              color: '#fff',
              border: 'none',
              padding: '0 48px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: "'Montserrat', sans-serif",
              cursor: 'pointer',
              borderRadius: '0',
              transition: 'background-color 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d96a10')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f07a20')}
          >
            Купить билет
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: '#fef7e0',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
        }}>
          {/* Left: Text content */}
          <div style={{ animation: 'fadeInUp 0.6s ease both' }}>
            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 46px)',
              color: '#1a1a1a',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}>
              Первое в России котокафе
            </h1>

            <p style={{
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '460px',
            }}>
              Крупнейшее котокафе России, в котором живёт 50 кошек
              и котов, и каждый из них ищет новый дом. Животных
              можно гладить, фотографировать, играть с ними.
            </p>

            {/* Working hours badge */}
            <div style={{
              display: 'inline-block',
              backgroundColor: '#fff9e6',
              border: '1px solid #f0c060',
              borderRadius: '8px',
              padding: '10px 18px',
              marginBottom: '20px',
              fontSize: '15px',
              color: '#555',
            }}>
              Рабочее время с 8:00 до 23:00
            </div>

            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555', fontSize: '15px' }}>
              <Icon name="MapPin" size={17} style={{ color: '#f07a20', flexShrink: 0 }} />
              <span>Санкт-Петербург, набережная реки Карповки, дом 5, литера П</span>
            </div>
          </div>

          {/* Right: Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '420px',
              height: '380px',
              borderRadius: '50%',
              backgroundColor: '#fde89a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img
                src="https://cdn.poehali.dev/projects/87b0c9b6-ae0c-46b1-93df-116c84f7f99c/files/c63591a6-ac89-4f94-9118-677ddaeabce1.jpg"
                alt="Котокафе иллюстрация"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
