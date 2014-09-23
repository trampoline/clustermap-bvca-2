// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__47758){var map__47762 = p__47758;var map__47762__$1 = ((cljs.core.seq_QMARK_.call(null,map__47762))?cljs.core.apply.call(null,cljs.core.hash_map,map__47762):map__47762);var opts = map__47762__$1;var content = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__47762,map__47762__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__47762,map__47762__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__47762,map__47762__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__47762,map__47762__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__47764 = method;var G__47764__$1 = (((G__47764 == null))?null:cljs.core.name.call(null,G__47764));var G__47764__$2 = (((G__47764__$1 == null))?null:clojure.string.upper_case.call(null,G__47764__$1));return G__47764__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__47758 = null;if (arguments.length > 1) {
  p__47758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__47758);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__47765){
var url = cljs.core.first(arglist__47765);
var p__47758 = cljs.core.rest(arglist__47765);
return AJAX__delegate(url,p__47758);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__47766){var map__47768 = p__47766;var map__47768__$1 = ((cljs.core.seq_QMARK_.call(null,map__47768))?cljs.core.apply.call(null,cljs.core.hash_map,map__47768):map__47768);var opts = map__47768__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__47766 = null;if (arguments.length > 1) {
  p__47766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__47766);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__47769){
var url = cljs.core.first(arglist__47769);
var p__47766 = cljs.core.rest(arglist__47769);
return GET__delegate(url,p__47766);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__47770){var map__47772 = p__47770;var map__47772__$1 = ((cljs.core.seq_QMARK_.call(null,map__47772))?cljs.core.apply.call(null,cljs.core.hash_map,map__47772):map__47772);var opts = map__47772__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__47770 = null;if (arguments.length > 2) {
  p__47770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__47770);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__47773){
var url = cljs.core.first(arglist__47773);
arglist__47773 = cljs.core.next(arglist__47773);
var content = cljs.core.first(arglist__47773);
var p__47770 = cljs.core.rest(arglist__47773);
return POST__delegate(url,content,p__47770);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__47774){var map__47776 = p__47774;var map__47776__$1 = ((cljs.core.seq_QMARK_.call(null,map__47776))?cljs.core.apply.call(null,cljs.core.hash_map,map__47776):map__47776);var opts = map__47776__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__47774 = null;if (arguments.length > 2) {
  p__47774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__47774);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__47777){
var url = cljs.core.first(arglist__47777);
arglist__47777 = cljs.core.next(arglist__47777);
var content = cljs.core.first(arglist__47777);
var p__47774 = cljs.core.rest(arglist__47777);
return PUT__delegate(url,content,p__47774);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_47912){var state_val_47913 = (state_47912[(1)]);if((state_val_47913 === (7)))
{var inst_47869 = (state_47912[(7)]);var inst_47868 = (state_47912[(2)]);var inst_47869__$1 = cljs.core.nth.call(null,inst_47868,(0),null);var inst_47870 = cljs.core.nth.call(null,inst_47868,(1),null);var inst_47871 = cljs.core.sequential_QMARK_.call(null,inst_47869__$1);var state_47912__$1 = (function (){var statearr_47914 = state_47912;(statearr_47914[(8)] = inst_47870);
(statearr_47914[(7)] = inst_47869__$1);
return statearr_47914;
})();if(inst_47871)
{var statearr_47915_47950 = state_47912__$1;(statearr_47915_47950[(1)] = (8));
} else
{var statearr_47916_47951 = state_47912__$1;(statearr_47916_47951[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (20)))
{var inst_47869 = (state_47912[(7)]);var state_47912__$1 = state_47912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47912__$1,(23),inst_47869);
} else
{if((state_val_47913 === (1)))
{var state_47912__$1 = state_47912;var statearr_47917_47952 = state_47912__$1;(statearr_47917_47952[(2)] = null);
(statearr_47917_47952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (4)))
{var state_47912__$1 = state_47912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47912__$1,(7),ocomm);
} else
{if((state_val_47913 === (15)))
{var inst_47892 = (state_47912[(2)]);var state_47912__$1 = state_47912;var statearr_47918_47953 = state_47912__$1;(statearr_47918_47953[(2)] = inst_47892);
(statearr_47918_47953[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (21)))
{var state_47912__$1 = state_47912;var statearr_47919_47954 = state_47912__$1;(statearr_47919_47954[(2)] = null);
(statearr_47919_47954[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (13)))
{var inst_47875 = (state_47912[(9)]);var state_47912__$1 = state_47912;var statearr_47920_47955 = state_47912__$1;(statearr_47920_47955[(2)] = inst_47875);
(statearr_47920_47955[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (22)))
{var inst_47901 = (state_47912[(2)]);var state_47912__$1 = state_47912;var statearr_47921_47956 = state_47912__$1;(statearr_47921_47956[(2)] = inst_47901);
(statearr_47921_47956[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (6)))
{var inst_47908 = (state_47912[(2)]);var state_47912__$1 = state_47912;var statearr_47922_47957 = state_47912__$1;(statearr_47922_47957[(2)] = inst_47908);
(statearr_47922_47957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (17)))
{var state_47912__$1 = state_47912;var statearr_47923_47958 = state_47912__$1;(statearr_47923_47958[(2)] = null);
(statearr_47923_47958[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (3)))
{var inst_47910 = (state_47912[(2)]);var state_47912__$1 = state_47912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47912__$1,inst_47910);
} else
{if((state_val_47913 === (12)))
{var inst_47894 = (state_47912[(2)]);var state_47912__$1 = state_47912;var statearr_47924_47959 = state_47912__$1;(statearr_47924_47959[(2)] = inst_47894);
(statearr_47924_47959[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (2)))
{var state_47912__$1 = state_47912;var statearr_47925_47960 = state_47912__$1;(statearr_47925_47960[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (23)))
{var inst_47898 = (state_47912[(2)]);var state_47912__$1 = state_47912;var statearr_47927_47961 = state_47912__$1;(statearr_47927_47961[(2)] = inst_47898);
(statearr_47927_47961[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (19)))
{var inst_47885 = (state_47912[(2)]);var state_47912__$1 = state_47912;var statearr_47928_47962 = state_47912__$1;(statearr_47928_47962[(2)] = inst_47885);
(statearr_47928_47962[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (11)))
{var inst_47874 = (state_47912[(10)]);var inst_47877 = cljs.core.empty_QMARK_.call(null,inst_47874);var state_47912__$1 = state_47912;if(inst_47877)
{var statearr_47929_47963 = state_47912__$1;(statearr_47929_47963[(1)] = (13));
} else
{var statearr_47930_47964 = state_47912__$1;(statearr_47930_47964[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (9)))
{var inst_47869 = (state_47912[(7)]);var state_47912__$1 = state_47912;if(cljs.core.truth_(inst_47869))
{var statearr_47931_47965 = state_47912__$1;(statearr_47931_47965[(1)] = (20));
} else
{var statearr_47932_47966 = state_47912__$1;(statearr_47932_47966[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (5)))
{var state_47912__$1 = state_47912;var statearr_47933_47967 = state_47912__$1;(statearr_47933_47967[(2)] = null);
(statearr_47933_47967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (14)))
{var inst_47874 = (state_47912[(10)]);var inst_47880 = cljs.core.rest.call(null,inst_47874);var inst_47881 = cljs.core.first.call(null,inst_47874);var state_47912__$1 = (function (){var statearr_47934 = state_47912;(statearr_47934[(11)] = inst_47880);
return statearr_47934;
})();if(cljs.core.truth_(inst_47881))
{var statearr_47935_47968 = state_47912__$1;(statearr_47935_47968[(1)] = (16));
} else
{var statearr_47936_47969 = state_47912__$1;(statearr_47936_47969[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (16)))
{var inst_47874 = (state_47912[(10)]);var inst_47883 = cljs.core.first.call(null,inst_47874);var state_47912__$1 = state_47912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47912__$1,(19),inst_47883);
} else
{if((state_val_47913 === (10)))
{var inst_47870 = (state_47912[(8)]);var inst_47903 = (state_47912[(2)]);var inst_47904 = cljs.core.apply.call(null,handler,inst_47903,inst_47870);var state_47912__$1 = (function (){var statearr_47937 = state_47912;(statearr_47937[(12)] = inst_47904);
return statearr_47937;
})();var statearr_47938_47970 = state_47912__$1;(statearr_47938_47970[(2)] = null);
(statearr_47938_47970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (18)))
{var inst_47880 = (state_47912[(11)]);var inst_47875 = (state_47912[(9)]);var inst_47888 = (state_47912[(2)]);var inst_47889 = cljs.core.conj.call(null,inst_47875,inst_47888);var inst_47874 = inst_47880;var inst_47875__$1 = inst_47889;var state_47912__$1 = (function (){var statearr_47939 = state_47912;(statearr_47939[(9)] = inst_47875__$1);
(statearr_47939[(10)] = inst_47874);
return statearr_47939;
})();var statearr_47940_47971 = state_47912__$1;(statearr_47940_47971[(2)] = null);
(statearr_47940_47971[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47913 === (8)))
{var inst_47869 = (state_47912[(7)]);var inst_47873 = cljs.core.PersistentVector.EMPTY;var inst_47874 = inst_47869;var inst_47875 = inst_47873;var state_47912__$1 = (function (){var statearr_47941 = state_47912;(statearr_47941[(9)] = inst_47875);
(statearr_47941[(10)] = inst_47874);
return statearr_47941;
})();var statearr_47942_47972 = state_47912__$1;(statearr_47942_47972[(2)] = null);
(statearr_47942_47972[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47946 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47946[(0)] = state_machine__5694__auto__);
(statearr_47946[(1)] = (1));
return statearr_47946;
});
var state_machine__5694__auto____1 = (function (state_47912){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_47912);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47947){if((e47947 instanceof Object))
{var ex__5697__auto__ = e47947;var statearr_47948_47973 = state_47912;(statearr_47948_47973[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47912);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47947;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47974 = state_47912;
state_47912 = G__47974;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47912){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_47949 = f__5709__auto__.call(null);(statearr_47949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_47949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__47977__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__47976 = rseq;var rcomm = cljs.core.nth.call(null,vec__47976,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__47976,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__47977 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47977__delegate.call(this,req_args);};
G__47977.cljs$lang$maxFixedArity = 0;
G__47977.cljs$lang$applyTo = (function (arglist__47978){
var req_args = cljs.core.seq(arglist__47978);
return G__47977__delegate(req_args);
});
G__47977.cljs$core$IFn$_invoke$arity$variadic = G__47977__delegate;
return G__47977;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_47996){var state_val_47997 = (state_47996[(1)]);if((state_val_47997 === (2)))
{var inst_47993 = (state_47996[(2)]);var inst_47994 = console.log(inst_47993);var state_47996__$1 = state_47996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47996__$1,inst_47994);
} else
{if((state_val_47997 === (1)))
{var state_47996__$1 = state_47996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47996__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48001 = [null,null,null,null,null,null,null];(statearr_48001[(0)] = state_machine__5694__auto__);
(statearr_48001[(1)] = (1));
return statearr_48001;
});
var state_machine__5694__auto____1 = (function (state_47996){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_47996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48002){if((e48002 instanceof Object))
{var ex__5697__auto__ = e48002;var statearr_48003_48005 = state_47996;(statearr_48003_48005[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47996);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e48002;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48006 = state_47996;
state_47996 = G__48006;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47996){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_48004 = f__5709__auto__.call(null);(statearr_48004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_48004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__48007){
var f = cljs.core.first(arglist__48007);
var args = cljs.core.rest(arglist__48007);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__48010){var vec__48011 = p__48010;var k = cljs.core.nth.call(null,vec__48011,(0),null);var v = cljs.core.nth.call(null,vec__48011,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___48038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___48038,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48038,r){
return (function (state_48029){var state_val_48030 = (state_48029[(1)]);if((state_val_48030 === (2)))
{var inst_48026 = (state_48029[(2)]);var inst_48027 = cljs.core.reset_BANG_.call(null,r,inst_48026);var state_48029__$1 = state_48029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48029__$1,inst_48027);
} else
{if((state_val_48030 === (1)))
{var state_48029__$1 = state_48029;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48029__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___48038,r))
;return ((function (switch__5693__auto__,c__5708__auto___48038,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48034 = [null,null,null,null,null,null,null];(statearr_48034[(0)] = state_machine__5694__auto__);
(statearr_48034[(1)] = (1));
return statearr_48034;
});
var state_machine__5694__auto____1 = (function (state_48029){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_48029);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48035){if((e48035 instanceof Object))
{var ex__5697__auto__ = e48035;var statearr_48036_48039 = state_48029;(statearr_48036_48039[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e48035;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48040 = state_48029;
state_48029 = G__48040;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48029){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48038,r))
})();var state__5710__auto__ = (function (){var statearr_48037 = f__5709__auto__.call(null);(statearr_48037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48038);
return statearr_48037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___48038,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__48041){
var id = cljs.core.first(arglist__48041);
arglist__48041 = cljs.core.next(arglist__48041);
var tolerance = cljs.core.first(arglist__48041);
var opts = cljs.core.rest(arglist__48041);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__48042){
var id = cljs.core.first(arglist__48042);
var opts = cljs.core.rest(arglist__48042);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__48043){
var ids = cljs.core.first(arglist__48043);
arglist__48043 = cljs.core.next(arglist__48043);
var tolerance = cljs.core.first(arglist__48043);
var opts = cljs.core.rest(arglist__48043);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__48044){var map__48046 = p__48044;var map__48046__$1 = ((cljs.core.seq_QMARK_.call(null,map__48046))?cljs.core.apply.call(null,cljs.core.hash_map,map__48046):map__48046);var opts = map__48046__$1;var boundaryline_ids = cljs.core.get.call(null,map__48046__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__48044 = null;if (arguments.length > 3) {
  p__48044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__48044);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__48047){
var collection_id = cljs.core.first(arglist__48047);
arglist__48047 = cljs.core.next(arglist__48047);
var tolerance = cljs.core.first(arglist__48047);
arglist__48047 = cljs.core.next(arglist__48047);
var bounds = cljs.core.first(arglist__48047);
var p__48044 = cljs.core.rest(arglist__48047);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__48044);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__48048){var vec__48050 = p__48048;var type_ids = cljs.core.nth.call(null,vec__48050,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__48048 = null;if (arguments.length > 6) {
  p__48048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__48048);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__48051){
var index = cljs.core.first(arglist__48051);
arglist__48051 = cljs.core.next(arglist__48051);
var type = cljs.core.first(arglist__48051);
arglist__48051 = cljs.core.next(arglist__48051);
var blcoll = cljs.core.first(arglist__48051);
arglist__48051 = cljs.core.next(arglist__48051);
var attr = cljs.core.first(arglist__48051);
arglist__48051 = cljs.core.next(arglist__48051);
var filter = cljs.core.first(arglist__48051);
arglist__48051 = cljs.core.next(arglist__48051);
var bounds = cljs.core.first(arglist__48051);
var p__48048 = cljs.core.rest(arglist__48051);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__48048);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattr,filter,bounds,p__48052){var vec__48054 = p__48052;var type_ids = cljs.core.nth.call(null,vec__48054,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(statsattr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattr,filter,bounds,var_args){
var p__48052 = null;if (arguments.length > 5) {
  p__48052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattr,filter,bounds,p__48052);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__48055){
var index = cljs.core.first(arglist__48055);
arglist__48055 = cljs.core.next(arglist__48055);
var type = cljs.core.first(arglist__48055);
arglist__48055 = cljs.core.next(arglist__48055);
var statsattr = cljs.core.first(arglist__48055);
arglist__48055 = cljs.core.next(arglist__48055);
var filter = cljs.core.first(arglist__48055);
arglist__48055 = cljs.core.next(arglist__48055);
var bounds = cljs.core.first(arglist__48055);
var p__48052 = cljs.core.rest(arglist__48055);
return summary_stats__delegate(index,type,statsattr,filter,bounds,p__48052);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__48056){var vec__48058 = p__48056;var type_ids = cljs.core.nth.call(null,vec__48058,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__48056 = null;if (arguments.length > 7) {
  p__48056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__48056);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__48059){
var index = cljs.core.first(arglist__48059);
arglist__48059 = cljs.core.next(arglist__48059);
var type = cljs.core.first(arglist__48059);
arglist__48059 = cljs.core.next(arglist__48059);
var location_attr = cljs.core.first(arglist__48059);
arglist__48059 = cljs.core.next(arglist__48059);
var attrs = cljs.core.first(arglist__48059);
arglist__48059 = cljs.core.next(arglist__48059);
var max_count = cljs.core.first(arglist__48059);
arglist__48059 = cljs.core.next(arglist__48059);
var filter = cljs.core.first(arglist__48059);
arglist__48059 = cljs.core.next(arglist__48059);
var bounds = cljs.core.first(arglist__48059);
var p__48056 = cljs.core.rest(arglist__48059);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__48056);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__48060){var vec__48062 = p__48060;var type_ids = cljs.core.nth.call(null,vec__48062,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__48060 = null;if (arguments.length > 0) {
  p__48060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__48060);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__48063){
var p__48060 = cljs.core.seq(arglist__48063);
return portfolio_company_sites__delegate(p__48060);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__48064){var vec__48066 = p__48064;var type_ids = cljs.core.nth.call(null,vec__48066,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__48064 = null;if (arguments.length > 0) {
  p__48064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__48064);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__48067){
var p__48064 = cljs.core.seq(arglist__48067);
return portfolio_company_sites_by_company__delegate(p__48064);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__48068){var vec__48070 = p__48068;var type_ids = cljs.core.nth.call(null,vec__48070,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__48068 = null;if (arguments.length > 0) {
  p__48068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__48068);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__48071){
var p__48068 = cljs.core.seq(arglist__48071);
return portfolio_company_locations__delegate(p__48068);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__48072){var vec__48074 = p__48072;var type_ids = cljs.core.nth.call(null,vec__48074,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__48072 = null;if (arguments.length > 0) {
  p__48072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__48072);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__48075){
var p__48072 = cljs.core.seq(arglist__48075);
return portfolio_company_site_stats__delegate(p__48072);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__48076){var vec__48078 = p__48076;var type_ids = cljs.core.nth.call(null,vec__48078,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__48076 = null;if (arguments.length > 0) {
  p__48076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__48076);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__48079){
var p__48076 = cljs.core.seq(arglist__48079);
return portfolio_company_site_account_timelines__delegate(p__48076);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__48080){var vec__48082 = p__48080;var type_ids = cljs.core.nth.call(null,vec__48082,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__48080 = null;if (arguments.length > 0) {
  p__48080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__48080);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__48083){
var p__48080 = cljs.core.seq(arglist__48083);
return investment_account_timelines__delegate(p__48080);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__48084){var vec__48086 = p__48084;var type_ids = cljs.core.nth.call(null,vec__48086,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__48084 = null;if (arguments.length > 0) {
  p__48084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__48084);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__48087){
var p__48084 = cljs.core.seq(arglist__48087);
return investment_stats__delegate(p__48084);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__48088){var vec__48090 = p__48088;var type_ids = cljs.core.nth.call(null,vec__48090,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__48088 = null;if (arguments.length > 0) {
  p__48088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__48088);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__48091){
var p__48088 = cljs.core.seq(arglist__48091);
return investment_aggs__delegate(p__48088);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__48092){var vec__48094 = p__48092;var type_ids = cljs.core.nth.call(null,vec__48094,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__48092 = null;if (arguments.length > 0) {
  p__48092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__48092);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__48095){
var p__48092 = cljs.core.seq(arglist__48095);
return investments__delegate(p__48092);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map