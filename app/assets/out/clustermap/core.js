// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('clustermap.nav');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
goog.require('clustermap.nav');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('goog.net.Jsonp');
goog.require('goog.events');
clustermap.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
clustermap.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
clustermap.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.call(null,out,res);
}));
return out;
});
clustermap.core.query_url = (function query_url(q){return [cljs.core.str(clustermap.core.wiki_search_url),cljs.core.str(q)].join('');
});
clustermap.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
clustermap.core.render_query = (function render_query(results){return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__3984__auto__ = (function iter__13630(s__13631){return (new cljs.core.LazySeq(null,(function (){var s__13631__$1 = s__13631;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13631__$1);if(temp__4092__auto__)
{var s__13631__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13631__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__13631__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__13633 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__13632 = 0;while(true){
if((i__13632 < size__3983__auto__))
{var result = cljs.core._nth.call(null,c__3982__auto__,i__13632);cljs.core.chunk_append.call(null,b__13633,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));
{
var G__13634 = (i__13632 + 1);
i__13632 = G__13634;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13633),iter__13630.call(null,cljs.core.chunk_rest.call(null,s__13631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13633),null);
}
} else
{var result = cljs.core.first.call(null,s__13631__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__13630.call(null,cljs.core.rest.call(null,s__13631__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,results);
})())),cljs.core.str("</ul>")].join('');
});
clustermap.core.init = (function init(){clustermap.nav.init.call(null);
var clicks = clustermap.core.listen.call(null,goog.dom.getElement("query"),"keyup");var results_view = goog.dom.getElement("results");var c__5850__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_13700){var state_val_13701 = (state_13700[1]);if((state_val_13701 === 8))
{var inst_13685 = (state_13700[2]);var inst_13686 = cljs.core.nth.call(null,inst_13685,0,null);var inst_13687 = cljs.core.nth.call(null,inst_13685,1,null);var inst_13688 = cljs.core.vec.call(null,inst_13687);var inst_13689 = cljs.core.conj.call(null,inst_13688,"bar");var inst_13690 = console.log(inst_13687);var inst_13691 = clustermap.core.render_query.call(null,inst_13689);var inst_13692 = results_view.innerHTML = inst_13691;var state_13700__$1 = (function (){var statearr_13702 = state_13700;(statearr_13702[7] = inst_13686);
(statearr_13702[8] = inst_13692);
(statearr_13702[9] = inst_13690);
return statearr_13702;
})();var statearr_13703_13717 = state_13700__$1;(statearr_13703_13717[2] = null);
(statearr_13703_13717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 7))
{var inst_13679 = (state_13700[2]);var inst_13681 = clustermap.core.user_query.call(null);var inst_13682 = clustermap.core.query_url.call(null,inst_13681);var inst_13683 = clustermap.core.jsonp.call(null,inst_13682);var state_13700__$1 = (function (){var statearr_13704 = state_13700;(statearr_13704[10] = inst_13679);
return statearr_13704;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13700__$1,8,inst_13683);
} else
{if((state_val_13701 === 6))
{var inst_13696 = (state_13700[2]);var state_13700__$1 = state_13700;var statearr_13705_13718 = state_13700__$1;(statearr_13705_13718[2] = inst_13696);
(statearr_13705_13718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 5))
{var state_13700__$1 = state_13700;var statearr_13706_13719 = state_13700__$1;(statearr_13706_13719[2] = null);
(statearr_13706_13719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 4))
{var state_13700__$1 = state_13700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13700__$1,7,clicks);
} else
{if((state_val_13701 === 3))
{var inst_13698 = (state_13700[2]);var state_13700__$1 = state_13700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13700__$1,inst_13698);
} else
{if((state_val_13701 === 2))
{var state_13700__$1 = state_13700;if(true)
{var statearr_13707_13720 = state_13700__$1;(statearr_13707_13720[1] = 4);
} else
{var statearr_13708_13721 = state_13700__$1;(statearr_13708_13721[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13701 === 1))
{var state_13700__$1 = state_13700;var statearr_13709_13722 = state_13700__$1;(statearr_13709_13722[2] = null);
(statearr_13709_13722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_13713 = (new Array(11));(statearr_13713[0] = state_machine__5781__auto__);
(statearr_13713[1] = 1);
return statearr_13713;
});
var state_machine__5781__auto____1 = (function (state_13700){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_13700);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e13714){if((e13714 instanceof Object))
{var ex__5784__auto__ = e13714;var statearr_13715_13723 = state_13700;(statearr_13715_13723[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13724 = state_13700;
state_13700 = G__13724;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_13700){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_13700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_13716 = f__5851__auto__.call(null);(statearr_13716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto__);
return statearr_13716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
}));
return c__5850__auto__;
});
clustermap.core.init.call(null);

//# sourceMappingURL=core.js.map