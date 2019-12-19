import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useKey from "./useKey";

const EnterEvent = {
  key: "Enter",
  code: 13
};

const SpaceEvent = {
    key: 'Space',
    code: 32
}

const mockFunction = jest.fn()

describe('useKey', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    renderHook(() => useKey({ [EnterEvent.key]: mockFunction }));

    describe('When key matches', () => {
        it("Should called passed function", () => {   
          fireEvent.keyDown(window, EnterEvent);
          expect(mockFunction).toHaveBeenCalled();
        });
    })

    describe('When key DOES NOT match', () => {
        it('Should not call function', () => {
            fireEvent.keyDown(window, SpaceEvent)
            expect(mockFunction).not.toHaveBeenCalled()
        })
    })
})
