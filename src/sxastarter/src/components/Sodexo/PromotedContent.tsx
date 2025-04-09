import React from 'react';
import Image from 'next/image';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type SodexoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoDefaultComponent = (props: SodexoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoProps): JSX.Element => {
  const promotedItems = [
    {
      id: 1,
      title: 'Sodexo revenues & awards 2024',
      subtitle: "Let's discover the award winner in your area",
      image: '/placeholder.svg?height=400&width=600',
      size: 'large',
    },
    {
      id: 2,
      title: 'Food safety: new circular coming up and latest innovation report',
      image: '/placeholder.svg?height=200&width=400',
      size: 'medium',
    },
    {
      id: 3,
      title: 'Top Stories UK: A year at Sodexo',
      image: '/placeholder.svg?height=150&width=200',
      size: 'small',
    },
    {
      id: 4,
      title: 'Touching the lives of 86 million consumers with excellence',
      image: '/placeholder.svg?height=150&width=200',
      size: 'small',
    },
  ];

  if (props.fields) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '15px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            gridColumn: '1 / 2',
            gridRow: '1 / 3',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            height: '500px',
          }}
        >
          <Image
            src={promotedItems[0].image || '/placeholder.svg'}
            alt={promotedItems[0].title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              padding: '20px',
              color: 'white',
            }}
          >
            <h3
              style={{
                margin: '0 0 5px 0',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              {promotedItems[0].title}
            </h3>
            <p style={{ margin: 0, fontSize: '16px' }}>{promotedItems[0].subtitle}</p>
          </div>
        </div>

        <div
          style={{
            gridColumn: '2 / 3',
            gridRow: '1 / 2',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            height: '240px',
          }}
        >
          <Image
            src={promotedItems[1].image || '/placeholder.svg'}
            alt={promotedItems[1].title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              padding: '15px',
              color: 'white',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              {promotedItems[1].title}
            </h3>
          </div>
        </div>

        <div
          style={{
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
          }}
        >
          {promotedItems.slice(2).map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
                height: '240px',
              }}
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '10px',
                  color: 'white',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <SodexoDefaultComponent {...props} />;
};
