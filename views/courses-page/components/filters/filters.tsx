"use client";

import Button from "@/components/_buttons/button/button";
import CloseButton from "@/components/_buttons/close-button/close-button";
import Checkbox from "@/components/_filters/checkbox/checkbox";
import CollapseItem from "@/components/_filters/collapse-item/collapse-item";
import Dates from "@/components/_filters/dates/dates";
import PriceItem from "@/components/_filters/price-item/price-item";
import Search from "@/components/_filters/search/search";
import Select, {getSelectValue} from "@/components/_filters/select/select";
import Wrapper from "@/components/_filters/wrapper/wrapper";
import Heading from "@/components/_tags/heading/heading";
import {SlugPart} from "@/helpers/contants";
import {formatDateFromDatePickerToHiddenInput, getDatesFromSearchParams} from "@/helpers/dates-helpers";
import useIsResolution from "@/hooks/useIsResolution";
import clsx from "clsx";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {ForwardedRef, forwardRef, ReactElement, useEffect, useRef, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import styles from "./filters.module.css";
import {FiltersProps} from "./filters.props";

const Filters = forwardRef(({
  className,
  filters,
  courseTypes,
  showMobileFilters,
  setShowMobileFilters,
}: FiltersProps, ref: ForwardedRef<HTMLFormElement>): ReactElement | null => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {push} = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const innerRef = useRef<HTMLDivElement>(null!);
  const isMobile = useIsResolution(1099);

  useEffect(() => {
    const onWrapperTransitionend = () => {
      innerRef.current.style.transform = `translateY(0)`;
    };

    const onInnerTransitionend = () => {
      setShowModal(false);
      wrapperRef.current.style.opacity = `0`;
    };

    if (!isMobile) return;

    if (showMobileFilters) {
      setShowModal(true);

      document.body.style.overflow = "hidden";
      wrapperRef.current.addEventListener(`transitionend`, onWrapperTransitionend, {once: true});

      setTimeout(() => {
        wrapperRef.current.style.opacity = `1`;
      }, 0);
    } else {
      document.body.style.overflow = "initial";
      innerRef.current.addEventListener(`transitionend`, onInnerTransitionend, {once: true});

      setTimeout(() => {
        innerRef.current.style.transform = `translateY(100%)`;
      }, 0);
    }

    return () => {
      wrapperRef.current.removeEventListener(`transitionend`, onWrapperTransitionend);
      innerRef.current.removeEventListener(`transitionend`, onInnerTransitionend);
    };
  }, [showMobileFilters]);

  return (
    <div className={clsx(className, styles.wrapper, {
      [styles.show]: showModal,
    })}
      ref={wrapperRef}
    >
      <div className={styles.hiddenWrapper} ref={innerRef}>
        <form
          className={styles.form}
          ref={ref}
          onChange={(e) => {
            if (isMobile) return;

            const target = e.target as HTMLInputElement;
            const name = target.name;

            if (name === ``) return;

            const type = target.type;
            const params = new URLSearchParams(searchParams);
            const term = target.value;

            if (type === `checkbox`) {
              const currentValue = params.get(name);

              if (target.checked) {
                if (!currentValue) {
                  params.set(name, term);
                } else {
                  params.set(name, `${currentValue},${term}`);
                }
              }

              if (!target.checked) {
                if (currentValue === term) {
                  params.delete(name);
                } else {
                  const values = currentValue!.split(`,`);

                  const index = values.indexOf(term);

                  if (index !== -1) {
                    values.splice(index, 1);

                    params.set(name, values.toString());
                  }
                }
              }
            } else {
              if (term) {
                params.set(name, term);
              } else {
                params.delete(name);
              }
            }

            push(`${pathname}?${params.toString()}`, {
              scroll: false,
            });
          }}>
          <CloseButton className={styles.close} onClick={() => {
            setShowMobileFilters(false);
          }} />

          <Heading tag={`h2`} className={styles.title}>Фильтры</Heading>

          <div className={styles.inner}>
            {courseTypes.length > 0 && <Select
              className={styles.typeSelect}
              labelName={"Тип обучения"}
              name={`type`}
              options={courseTypes}
              initialValue={pathname.split(`/`).find((name) => name.includes(SlugPart.TYPE))
                ? [courseTypes.find((type) => type.alias === pathname.split(`/`).find((name) => name.includes(SlugPart.TYPE))!.split(`-`).splice(1).join(`-`))!.value]
                : getSelectValue(searchParams, `type`)}
              isMultiselect
              clickCb={(value) => {
                const params = new URLSearchParams(searchParams);

                if (pathname.split(`/`).find((name) => name.includes(SlugPart.TYPE))) {
                  const newPathname = pathname.split(`/`).filter((name) => !name.includes(SlugPart.TYPE));

                  push(`${newPathname.join(`/`)}${params ? `?${params.toString()}` : ``}`, {
                    scroll: false,
                  });
                } else {
                  if ((typeof value === "string" && value) || (typeof value !== "string" && value.length > 0)) {
                    params.set(SlugPart.TYPE, value.toString());
                  } else {
                    params.delete(SlugPart.TYPE);
                  }

                  push(`${pathname}${params ? `?${params.toString()}` : ``}`, {
                    scroll: false,
                  });
                }
              }}
            />}

            <Search
              className={styles.search}
              placeholder={`Курс или направление...`}
              labelName={`Поиск по курсам или направлениям`}
              resetCB={() => {
                const params = new URLSearchParams(searchParams);

                params.delete("query");

                push(`${pathname}?${params.toString()}`, {
                  scroll: false,
                });
              }}
              onChange={useDebouncedCallback((e) => {
                const term = e.target.value;

                const params = new URLSearchParams(searchParams);

                if (term) {
                  params.set("query", term);
                } else {
                  params.delete("query");
                }

                push(`${pathname}?${params.toString()}`, {
                  scroll: false,
                });
              }, 300)}
            />

            <Wrapper className={styles.common}>
              <Checkbox className={styles.advancedTraining} labelName={`Повышение квалификации`}
                name={`advanced-training`} value={1} defaultChecked={Boolean(searchParams.get("advanced-training"))} />

              {filters.length > 0 && filters.map(({name, inputName, id, values}) => (
                <CollapseItem key={id} name={name} contentClassName={styles.checkboxList}>
                  {values.map((value) => {
                    let path: string | undefined;

                    if (value.alias) {
                      path = pathname.split(`/`).find((pName) => pName.includes(`${inputName}`));
                    }

                    return (
                      <Checkbox
                        key={value.id}
                        labelName={value.name}
                        defaultValue={value.value}
                        name={inputName}
                        onChange={(evt) => {
                          if (!path) return;

                          const newPathname = pathname.split(`/`).filter((pName) => !pName.includes(`${inputName}`));
                          const filterPathname = pathname.split(`/`).find((pName) => pName.includes(`${inputName}-${value.alias!}`));

                          evt.stopPropagation();

                          const params = new URLSearchParams(searchParams);

                          if (filterPathname !== `${inputName}-${value.alias!}`) {
                            params.set(inputName, value.value);
                          }

                          push(`${newPathname.join(`/`)}${params ? `?${params.toString()}` : ``}`, {
                            scroll: false,
                          });
                        }}
                        defaultChecked={path === `${inputName}-${value.alias!}` ? true : Array.from(searchParams.entries()).some(([key, paramValue]) => {
                          const values = paramValue.includes(`,`) ? paramValue.split(`,`) : paramValue;

                          return key === inputName && ((typeof values === "string" && values === `${value.value}`) || (typeof values !== "string" && values.includes(`${value.value}`)));
                        })}
                      />);
                  })}
                </CollapseItem>))}
              <CollapseItem name={`Цена`} contentClassName={styles.priceList}>
                <PriceItem labelName={`от`} name={`price-start`} defaultValue={searchParams.get(`price-start`) ?? ``}
                  placeholder={`1 000`} />
                <PriceItem labelName={`до`} name={`price-end`} defaultValue={searchParams.get(`price-end`) ?? ``}
                  placeholder={`80 000`} />
              </CollapseItem>
              <CollapseItem name={`Дата`} contentClassName={styles.date}>
                <Dates
                  initialDates={getDatesFromSearchParams({
                    dateStart: searchParams.get("date-start") ?? undefined,
                    dateEnd: searchParams.get("date-end") ?? undefined,
                  })}
                  onSelectCB={(dates) => {
                    const params = new URLSearchParams(searchParams);

                    if (!dates) {
                      params.delete("date-start");
                      params.delete("date-end");
                    }

                    if (dates?.from) {
                      params.set("date-start", formatDateFromDatePickerToHiddenInput(dates?.from));
                    } else {
                      params.delete("date-start");
                    }

                    if (dates?.to) {
                      params.set("date-end", formatDateFromDatePickerToHiddenInput(dates?.to));
                    } else {
                      params.delete("date-end");
                    }

                    push(`${pathname}?${params.toString()}`, {
                      scroll: false,
                    });
                  }}
                />
              </CollapseItem>
            </Wrapper>

            <div className={styles.buttons}>
              <Button type={`reset`} color={"primary-light"}>Очистить</Button>
              <Button type={`submit`}>Применить</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

Filters.displayName = `Filters`;

export default Filters;
