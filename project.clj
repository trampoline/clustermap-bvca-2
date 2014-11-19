(defproject clustermap-bvca-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2227"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/google-closure-library "0.0-2029-2"]
                 [org.clojure/google-closure-library-third-party "0.0-2029-2"]
                 [domina "1.0.2"]
                 [jayq "2.5.1"]
                 [om "0.6.4"]
                 [sablono "0.2.17"]
                 [hiccups "0.3.0"]
                 [secretary "1.1.0"]
                 ]

;;  :exclusions [org.clojure/google-closure-library
;;               org.clojure/google-closure-library-third-party
;;               goog-jar]

  :jvm-opts ["-Xmx1g"
             "-server"
             "-XX:MaxPermSize=128m"
             "-XX:+CMSClassUnloadingEnabled"
             "-XX:+UseConcMarkSweepGC"]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :cljsbuild {
              :builds {:none
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/none/clustermap.js"
                                   :source-map true
                                   :output-dir "cljs-out/none/cljs"
                                   :optimizations :none
                                   :pretty-print true}}

                       :whitespace
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/whitespace/clustermap.js"
                                   :source-map "cljs-out/whitespace/clustermap.js.map"
                                   :output-dir "cljs-out/whitespace/cljs"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   :output-wrapper false}}

                       :simple
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/simple/clustermap.js"
                                   :source-map "cljs-out/simple/clustermap.js.map"
                                   :output-dir "cljs-out/simple/cljs"
                                   :optimizations :simple
                                   :pretty-print true
                                   :output-wrapper false}}

                       :advanced
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/advanced/clustermap.js"
                                   :source-map "cljs-out/advanced/clustermap.js.map"
                                   :output-dir "cljs-out/advanced/cljs"
                                   :optimizations :advanced
                                   :output-wrapper false
                                   :externs ["react/externs/react.js"]}}}})
