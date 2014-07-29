// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.model');
goog.require('cljs.core');
clustermap.model.extract_id = (function extract_id(type,obj){var pred__50666 = cljs.core._EQ_;var expr__50667 = type;if(cljs.core.truth_(pred__50666.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__50667)))
{return new cljs.core.Keyword(null,"company_no","company_no",1886326649).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__50666.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__50667)))
{return new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__50666.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__50667)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395).cljs$core$IFn$_invoke$arity$1(obj);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50667))));
}
}
}
});

//# sourceMappingURL=model.js.map