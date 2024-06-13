"use client"

import React from "react"
import { Transition } from "react-transition-group"
import Input, { InputProps } from "./input"
import { cn } from "@/app/lib/utils"
import usePrevious from "@/app/_hooks/use-previous"

interface FormInputProps extends InputProps {
  name: string
  errors?: Record<string, unknown & { message?: string }>
}

/**
 * 러너스 디자인시스템의 Input 컴포넌트에 name을 반드시 받고, errors 필드가 추가된 form 전용 인풋
 * errors 객체의 모양은 react-hook-form과 최대한 유사하게 가져가기 위해 {[name]: {message: "message"}}로 통일했습니다.
 * react-hook-form에 의존적인 컴포넌트는 아님!
 */
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, errors, ...props }, ref) => {
    const error = errors?.[name]

    const isError = !!error

    // 트랜지션 unmount시 error 필드가 사라져서 갑작스러운 레이아웃쉬프트가 생기는걸 방지
    const prevError = usePrevious(errors?.[name as string]?.message || "")

    return (
      <div className="relative">
        <Input {...props} ref={ref} isError={isError} />

        <Transition in={isError} timeout={300} mountOnEnter unmountOnExit>
          {(state: string) => {
            return (
              <p
                className={cn("mt-1 text-12 text-error-600", {
                  "-translate-y-full opacity-0 transition-all duration-300 ease-in-out":
                    state === "exited",
                  "-translate-y-3/4 opacity-0 transition-all duration-300 ease-in-out":
                    state === "exiting",
                  "translate-y-0 transition-all duration-300 ease-in-out":
                    state === "entering",
                  "translate-y-0 opacity-100 transition-all duration-300 ease-in-out":
                    state === "entered",
                })}
              >
                {errors?.[name as string]?.message || prevError}
              </p>
            )
          }}
        </Transition>
      </div>
    )
  },
)

FormInput.displayName = "FormInput"

export default FormInput
