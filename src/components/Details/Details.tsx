import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as selectors from '../../store/store';
import { IState, IDetail } from '../../interface/interface';

export const Details = () => {
  const info = useSelector((state: IState) => selectors.getInfo(state));
  const { artObject } = info;

  return (
    <section className="details">
      <div className="wrapper">
        {
          !artObject ? (
            <>
              <Link
                to="/"
                className="back"
              >
                <span className="icon-point-left icon" />
                Back
              </Link>

              <h1 className="error-message">No results</h1>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="back"
              >
                <span className="icon-point-left icon" />
                Back
              </Link>

              <h1 className="details__title">{artObject.title}</h1>

              <ul className="details__list">
                {
                  artObject.principalMakers.map((detail: IDetail) => (
                    <div key={detail.dateOfBirth}>
                      <li className="details__item">
                      <span className="details__item--title">
                        Author:
                      </span>

                        {detail.name}
                      </li>

                      <li className="details__item">
                      <span className="details__item--title">
                        Period of life:
                      </span>

                        {detail.dateOfBirth}
                        {' - '}
                        {detail.dateOfDeath}
                      </li>
                    </div>
                  ))
                }
                <li className="details__item">
                <span className="details__item--title">
                  Dating:
                </span>

                  {artObject.dating.presentingDate}
                </li>

                <li className="details__item">
                <span className="details__item--title">
                  Way of drawing:
                </span>

                  {artObject.physicalMedium}
                </li>
              </ul>

              <article className="details__content">
                <img
                  src={artObject.webImage.url}
                  alt="img"
                  className="details__img"
                />

                <p className="details__description">
                  {artObject.label.description}
                </p>
              </article>
            </>
          )
        }
      </div>
    </section>
  );
};
