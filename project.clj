(defproject clustermap-bvca-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [org.clojure/google-closure-library "0.0-20130212-95c19e7f0f5f"]
                 [org.clojure/google-closure-library-third-party "0.0-20130212-95c19e7f0f5f"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [domina "1.0.2"]
                 [jayq "2.5.0"]]

;;  :exclusions [org.clojure/google-closure-library
;;               org.clojure/google-closure-library-third-party
;;               goog-jar]

  :jvm-opts ["-Xmx1g"
             "-server"
             "-XX:MaxPermSize=128m"
             "-XX:+CMSClassUnloadingEnabled"
             "-XX:+UseConcMarkSweepGC"]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "clustermap"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/clustermap.js"
                                   :source-map true ; "cljs-out/clustermap.js.map"
                                   :output-dir "cljs-out/cljs"
                                   :optimizations :none
                                   :pretty-print true
                                   }}]})
