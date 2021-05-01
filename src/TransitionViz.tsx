import { useSelector } from '@xstate/react';
import React, { useContext, useEffect, useRef } from 'react';
import type { Guard, TransitionDefinition } from 'xstate';
import { SimulationContext } from './App';
import { setRect } from './getRect';
import './TransitionViz.scss';

const getGuardType = (guard: Guard<any, any>) => {
  return guard.name; // v4
};

export const TransitionViz: React.FC<{
  definition: TransitionDefinition<any, any>;
  index: number;
}> = ({ definition, index }) => {
  const service = useContext(SimulationContext);
  // const state = useSelector(service, (s) => s);

  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      setRect(`${definition.source.id}:${index}`, ref.current);
    }
  }, []);

  return (
    <div data-viz="transition">
      <div
        data-viz="transition-label"
        ref={ref}
        onMouseEnter={() => {
          service.send({
            type: 'EVENT.PREVIEW',
            eventType: definition.eventType,
          });
        }}
        onMouseLeave={() => {
          service.send({
            type: 'PREVIEW.CLEAR',
          });
        }}
        onClick={() => {
          // TODO: only if no parameters/schema
          service.send({
            type: 'EVENT',
            event: {
              type: definition.eventType,
            },
          });
        }}
      >
        <div data-viz="transition-event">{definition.eventType}</div>
        {definition.cond && (
          <div data-viz="transition-guard">{getGuardType(definition.cond)}</div>
        )}
      </div>
    </div>
  );
};
