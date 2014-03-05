(ns clustermap.model)

(defn extract-id
  [type obj]
  (condp = type
    :portfolio-company (:company_no obj)
    :investor-company (:investor_company_uid obj)
    :constituency (:boundaryline_id obj)))
