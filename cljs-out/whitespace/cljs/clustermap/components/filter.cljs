(ns clustermap.components.filter
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.om :as omu]
            [clustermap.routes :as routes]
            [clustermap.model :as model]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]))


(defn filter-component
  [{:as cursor} owner]

  (reify
    om/IRenderState
    (render-state [this state]
      (html
       [:div.filter-component

        [:div.tbl
         [:div.tbl-row
          [:div.tbl-cell
           [:h3 "Filter"]]]

         [:div.tbl-row
          [:div.tbl-cell "age"]
          [:div.tbl-cell [:select {:onChange (fn [e]
                                               (let [val (-> e .-target .-value)]
                                                 (.log js/console val)
                                                 (om/update! cursor [:components :age]
                                                             (condp = val
                                                                   "new" {:range {"!formation_date" {:gte "2009-01-01"}}}
                                                                   "old" {:range {"!formation_date" {:lt "2009-01-01"}}}
                                                                   nil))))}
                          [:option {:value ""} "any"]
                          [:option {:value "new"} "< 5 years old"]
                          [:option {:value "old"} ">= 5 years old"]]]]

         [:div.tbl-row
          [:div.tbl-cell "group ?"]
          [:div.tbl-cell [:select {:onChange (fn [e]
                                               (let [val (-> e .-target .-value)]
                                                 (.log js/console val)
                                                 (om/update! cursor [:components :group]
                                                             (condp = val
                                                                   "group" {:term {"!is_group" false}}
                                                                   "notgroup" {:term {"!is_group" true}}
                                                                   nil))))}
                          [:option {:value ""} "any"]
                          [:option {:value "group"} "group"]
                          [:option {:value "notgroup"} "not group"]]]]

         [:div.tbl-row
          [:div.tbl-cell "turnover"]
          [:div.tbl-cell [:select {:onChange (fn [e]
                                               (let [val (-> e .-target .-value)]
                                                 (.log js/console val)
                                                 (om/update! cursor [:components :turnover]
                                                             (condp = val
                                                                   "low" {:range {"!latest_turnover" {:lt 1000000}}}
                                                                   "high" {:range {"!latest_turnover" {:gte 1000000}}}
                                                                    nil))))}
                          [:option {:value ""} "any"]
                          [:option {:value "low"} "< £1 million"]
                          [:option {:value "high"} ">= £1 million"]]]]

         [:div.tbl-row
          [:div.tbl-cell "SIC section"]
          [:div.tbl-cell
           [:select {:style {:width "100%"}
                     :onChange (fn [e]
                                 (let [val (-> e .-target .-value)]
                                   (.log js/console (-> e .-target .-value))
                                   (om/update! cursor [:components :sic]
                                               (condp = val
                                                 "A" {:range {"!sic07" {:gte "01110" :lte "03220"}}}
                                                 "B" {:range {"!sic07" {:gte "05101" :lte "09900"}}}
                                                 "C" {:range {"!sic07" {:gte "10110" :lte "33200"}}}
                                                 "D" {:range {"!sic07" {:gte "35110" :lte "35300"}}}
                                                 "E" {:range {"!sic07" {:gte "36000" :lte "39000"}}}
                                                 "F" {:range {"!sic07" {:gte "41100" :lte "43999"}}}
                                                 "G" {:range {"!sic07" {:gte "45111" :lte "47990"}}}
                                                 "H" {:range {"!sic07" {:gte "49100" :lte "53202"}}}
                                                 "I" {:range {"!sic07" {:gte "55100" :lte "56302"}}}
                                                 "J" {:range {"!sic07" {:gte "58110" :lte "63990"}}}
                                                 "K" {:range {"!sic07" {:gte "64110" :lte "66300"}}}
                                                 "L" {:range {"!sic07" {:gte "68100" :lte "68320"}}}
                                                 "M" {:range {"!sic07" {:gte "69101" :lte "75000"}}}
                                                 "N" {:range {"!sic07" {:gte "77110" :lte "82990"}}}
                                                 "O" {:range {"!sic07" {:gte "84110" :lte "84300"}}}
                                                 "P" {:range {"!sic07" {:gte "85100" :lte "85600"}}}
                                                 "Q" {:range {"!sic07" {:gte "86101" :lte "88990"}}}
                                                 "R" {:range {"!sic07" {:gte "90010" :lte "93290"}}}
                                                 "S" {:range {"!sic07" {:gte "94110" :lte "96090"}}}
                                                 "T" {:range {"!sic07" {:gte "97000" :lte "98200"}}}
                                                 "U" {:range {"!sic07" {:gte "99000" :lte "99999"}}}
                                                 nil))))}
            [:option {:value ""} "all"]
            [:option {:value "A"} "A : Agriculture, Forestry and Fishing"]
            [:option {:value "B"} "B : Mining and Quarrying"]
            [:option {:value "C"} "C : Manufacturing"]
            [:option {:value "D"} "D : Electricity, gas, steam and air conditioning supply"]
            [:option {:value "E"} "E : Water supply, sewerage, waste management and remediation activities"]
            [:option {:value "F"} "F : Construction"]
            [:option {:value "G"} "G : Wholesale and retail trade; repair of motor vehicles and motorcycles"]
            [:option {:value "H"} "H : Transportation and storage"]
            [:option {:value "I"} "I : Accommodation and food service activities"]
            [:option {:value "J"} "J : Information and communication"]
            [:option {:value "K"} "K : Financial and insurance activities"]
            [:option {:value "L"} "L : Real estate activities"]
            [:option {:value "M"} "M : Professional, scientific and technical activities"]
            [:option {:value "N"} "N : Administrative and support service activities"]
            [:option {:value "O"} "O : Public administration and defence; compulsory social security"]
            [:option {:value "P"} "P : Education"]
            [:option {:value "Q"} "Q : Human health and social work activities"]
            [:option {:value "R"} "R : Arts, entertainment and recreation"]
            [:option {:value "S"} "S : Other service activities"]
            [:option {:value "T"} "T : Activities of households as employers"]
            [:option {:value "U"} "U : Activities of extraterritorial organisations and bodies"]
            ]]]




         ]]))

    om/IWillUpdate
    (will-update [this
                  {next-components :components
                   next-compiled :compiled}
                  next-state]
      (let [{components :components
             compiled :compiled} (om/get-props owner)]

        (when (not= next-components components)
          (om/update! cursor [:compiled] (->> next-components vals (map om/-value) (filter identity) (into []))))))))

(defn mount
  [app-state path elem-id shared]
  (om/root filter-component
           app-state
           {:shared shared
            :target (.getElementById js/document elem-id)
            :path path}))
