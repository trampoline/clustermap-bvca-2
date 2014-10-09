// Compiled by ClojureScript 0.0-2322
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__53640,args){var map__53642 = p__53640;var map__53642__$1 = ((cljs.core.seq_QMARK_(map__53642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53642):map__53642);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53642__$1,cljs.core.constant$keyword$1597);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__53640,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__53640,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__53643){
var p__53640 = cljs.core.first(arglist__53643);
var args = cljs.core.rest(arglist__53643);
return log__delegate(p__53640,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__53644){var map__53646 = p__53644;var map__53646__$1 = ((cljs.core.seq_QMARK_(map__53646))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53646):map__53646);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53646__$1,cljs.core.constant$keyword$1598);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__53647,callback){var map__53649 = p__53647;var map__53649__$1 = ((cljs.core.seq_QMARK_(map__53649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53649):map__53649);var msg = map__53649__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53649__$1,cljs.core.constant$keyword$1599);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53649__$1,cljs.core.constant$keyword$1600);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53649__$1,cljs.core.constant$keyword$1601);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__53649,map__53649__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__53649,map__53649__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__53650,p__53651){var map__53654 = p__53650;var map__53654__$1 = ((cljs.core.seq_QMARK_(map__53654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53654):map__53654);var opts = map__53654__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53654__$1,cljs.core.constant$keyword$1602);var map__53655 = p__53651;var map__53655__$1 = ((cljs.core.seq_QMARK_(map__53655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53655):map__53655);var d = map__53655__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53655__$1,cljs.core.constant$keyword$1603);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1601,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__53656,p__53657){var map__53699 = p__53656;var map__53699__$1 = ((cljs.core.seq_QMARK_(map__53699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53699):map__53699);var opts = map__53699__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53699__$1,cljs.core.constant$keyword$1604);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53699__$1,cljs.core.constant$keyword$1605);var map__53700 = p__53657;var map__53700__$1 = ((cljs.core.seq_QMARK_(map__53700))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53700):map__53700);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53700__$1,cljs.core.constant$keyword$1606);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__53699,map__53699__$1,opts,on_jsload,before_jsload,map__53700,map__53700__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__53699,map__53699__$1,opts,on_jsload,before_jsload,map__53700,map__53700__$1,files){
return (function (state_53723){var state_val_53724 = (state_53723[(1)]);if((state_val_53724 === (6)))
{var inst_53705 = (state_53723[(7)]);var inst_53714 = (state_53723[(2)]);var inst_53715 = cljs.core.PersistentVector.EMPTY_NODE;var inst_53716 = [inst_53705];var inst_53717 = (new cljs.core.PersistentVector(null,1,(5),inst_53715,inst_53716,null));var inst_53718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_53717);var state_53723__$1 = (function (){var statearr_53725 = state_53723;(statearr_53725[(8)] = inst_53714);
return statearr_53725;
})();var statearr_53726_53740 = state_53723__$1;(statearr_53726_53740[(2)] = inst_53718);
(statearr_53726_53740[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_53724 === (5)))
{var inst_53721 = (state_53723[(2)]);var state_53723__$1 = state_53723;return cljs.core.async.impl.ioc_helpers.return_chan(state_53723__$1,inst_53721);
} else
{if((state_val_53724 === (4)))
{var state_53723__$1 = state_53723;var statearr_53727_53741 = state_53723__$1;(statearr_53727_53741[(2)] = null);
(statearr_53727_53741[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_53724 === (3)))
{var inst_53705 = (state_53723[(7)]);var inst_53708 = console.debug("Figwheel: loaded these files");var inst_53709 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1603,inst_53705);var inst_53710 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_53709], 0));var inst_53711 = console.log(inst_53710);var inst_53712 = cljs.core.async.timeout((10));var state_53723__$1 = (function (){var statearr_53728 = state_53723;(statearr_53728[(9)] = inst_53708);
(statearr_53728[(10)] = inst_53711);
return statearr_53728;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53723__$1,(6),inst_53712);
} else
{if((state_val_53724 === (2)))
{var inst_53705 = (state_53723[(7)]);var inst_53705__$1 = (state_53723[(2)]);var inst_53706 = cljs.core.not_empty(inst_53705__$1);var state_53723__$1 = (function (){var statearr_53729 = state_53723;(statearr_53729[(7)] = inst_53705__$1);
return statearr_53729;
})();if(cljs.core.truth_(inst_53706))
{var statearr_53730_53742 = state_53723__$1;(statearr_53730_53742[(1)] = (3));
} else
{var statearr_53731_53743 = state_53723__$1;(statearr_53731_53743[(1)] = (4));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_53724 === (1)))
{var inst_53701 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_53702 = figwheel.client.add_request_urls(opts,files);var inst_53703 = figwheel.client.load_all_js_files(inst_53702);var state_53723__$1 = (function (){var statearr_53732 = state_53723;(statearr_53732[(11)] = inst_53701);
return statearr_53732;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53723__$1,(2),inst_53703);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__53699,map__53699__$1,opts,on_jsload,before_jsload,map__53700,map__53700__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__53699,map__53699__$1,opts,on_jsload,before_jsload,map__53700,map__53700__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53736 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53736[(0)] = state_machine__5694__auto__);
(statearr_53736[(1)] = (1));
return statearr_53736;
});
var state_machine__5694__auto____1 = (function (state_53723){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53723);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53737){if((e53737 instanceof Object))
{var ex__5697__auto__ = e53737;var statearr_53738_53744 = state_53723;(statearr_53738_53744[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53723);
return cljs.core.constant$keyword$1094;
} else
{throw e53737;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__53745 = state_53723;
state_53723 = G__53745;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53723){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__53699,map__53699__$1,opts,on_jsload,before_jsload,map__53700,map__53700__$1,files))
})();var state__5710__auto__ = (function (){var statearr_53739 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__53699,map__53699__$1,opts,on_jsload,before_jsload,map__53700,map__53700__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__53746,link_href){var map__53748 = p__53746;var map__53748__$1 = ((cljs.core.seq_QMARK_(map__53748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53748):map__53748);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,cljs.core.constant$keyword$1601);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,cljs.core.constant$keyword$1603);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_53769){var state_val_53770 = (state_53769[(1)]);if((state_val_53770 === (2)))
{var inst_53766 = (state_53769[(2)]);var inst_53767 = parent.removeChild(orig_link);var state_53769__$1 = (function (){var statearr_53771 = state_53769;(statearr_53771[(7)] = inst_53766);
return statearr_53771;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53769__$1,inst_53767);
} else
{if((state_val_53770 === (1)))
{var inst_53764 = cljs.core.async.timeout((200));var state_53769__$1 = state_53769;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53769__$1,(2),inst_53764);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53775 = [null,null,null,null,null,null,null,null];(statearr_53775[(0)] = state_machine__5694__auto__);
(statearr_53775[(1)] = (1));
return statearr_53775;
});
var state_machine__5694__auto____1 = (function (state_53769){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53769);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53776){if((e53776 instanceof Object))
{var ex__5697__auto__ = e53776;var statearr_53777_53779 = state_53769;(statearr_53777_53779[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53769);
return cljs.core.constant$keyword$1094;
} else
{throw e53776;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__53780 = state_53769;
state_53769 = G__53780;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53769){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_53778 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,parent))
);
return c__5708__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__53781){var map__53783 = p__53781;var map__53783__$1 = ((cljs.core.seq_QMARK_(map__53783))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53783):map__53783);var f_data = map__53783__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,cljs.core.constant$keyword$1601);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,cljs.core.constant$keyword$1603);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__53784,files_msg){var map__53806 = p__53784;var map__53806__$1 = ((cljs.core.seq_QMARK_(map__53806))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53806):map__53806);var opts = map__53806__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53806__$1,cljs.core.constant$keyword$1607);var seq__53807_53827 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1606.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__53808_53828 = null;var count__53809_53829 = (0);var i__53810_53830 = (0);while(true){
if((i__53810_53830 < count__53809_53829))
{var f_53831 = chunk__53808_53828.cljs$core$IIndexed$_nth$arity$2(null,i__53810_53830);figwheel.client.reload_css_file(f_53831);
{
var G__53832 = seq__53807_53827;
var G__53833 = chunk__53808_53828;
var G__53834 = count__53809_53829;
var G__53835 = (i__53810_53830 + (1));
seq__53807_53827 = G__53832;
chunk__53808_53828 = G__53833;
count__53809_53829 = G__53834;
i__53810_53830 = G__53835;
continue;
}
} else
{var temp__4126__auto___53836 = cljs.core.seq(seq__53807_53827);if(temp__4126__auto___53836)
{var seq__53807_53837__$1 = temp__4126__auto___53836;if(cljs.core.chunked_seq_QMARK_(seq__53807_53837__$1))
{var c__4314__auto___53838 = cljs.core.chunk_first(seq__53807_53837__$1);{
var G__53839 = cljs.core.chunk_rest(seq__53807_53837__$1);
var G__53840 = c__4314__auto___53838;
var G__53841 = cljs.core.count(c__4314__auto___53838);
var G__53842 = (0);
seq__53807_53827 = G__53839;
chunk__53808_53828 = G__53840;
count__53809_53829 = G__53841;
i__53810_53830 = G__53842;
continue;
}
} else
{var f_53843 = cljs.core.first(seq__53807_53837__$1);figwheel.client.reload_css_file(f_53843);
{
var G__53844 = cljs.core.next(seq__53807_53837__$1);
var G__53845 = null;
var G__53846 = (0);
var G__53847 = (0);
seq__53807_53827 = G__53844;
chunk__53808_53828 = G__53845;
count__53809_53829 = G__53846;
i__53810_53830 = G__53847;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__53806,map__53806__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__53806,map__53806__$1,opts,on_cssload){
return (function (state_53817){var state_val_53818 = (state_53817[(1)]);if((state_val_53818 === (2)))
{var inst_53813 = (state_53817[(2)]);var inst_53814 = cljs.core.constant$keyword$1606.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_53815 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_53814) : on_cssload.call(null,inst_53814));var state_53817__$1 = (function (){var statearr_53819 = state_53817;(statearr_53819[(7)] = inst_53813);
return statearr_53819;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53817__$1,inst_53815);
} else
{if((state_val_53818 === (1)))
{var inst_53811 = cljs.core.async.timeout((100));var state_53817__$1 = state_53817;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53817__$1,(2),inst_53811);
} else
{return null;
}
}
});})(c__5708__auto__,map__53806,map__53806__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__53806,map__53806__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53823 = [null,null,null,null,null,null,null,null];(statearr_53823[(0)] = state_machine__5694__auto__);
(statearr_53823[(1)] = (1));
return statearr_53823;
});
var state_machine__5694__auto____1 = (function (state_53817){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53817);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53824){if((e53824 instanceof Object))
{var ex__5697__auto__ = e53824;var statearr_53825_53848 = state_53817;(statearr_53825_53848[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53817);
return cljs.core.constant$keyword$1094;
} else
{throw e53824;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__53849 = state_53817;
state_53817 = G__53849;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53817){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__53806,map__53806__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_53826 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__53806,map__53806__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1608)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1608)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster(src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__53850){var map__53855 = p__53850;var map__53855__$1 = ((cljs.core.seq_QMARK_(map__53855))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53855):map__53855);var opts = map__53855__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53855__$1,cljs.core.constant$keyword$1609);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53855__$1,cljs.core.constant$keyword$1610);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53855__$1,cljs.core.constant$keyword$1598);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53855__$1,cljs.core.constant$keyword$1611);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__53856 = cljs.core._EQ_;var expr__53857 = cljs.core.constant$keyword$1608.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__53856.cljs$core$IFn$_invoke$arity$2 ? pred__53856.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1612,expr__53857) : pred__53856.call(null,cljs.core.constant$keyword$1612,expr__53857))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__53856.cljs$core$IFn$_invoke$arity$2 ? pred__53856.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1613,expr__53857) : pred__53856.call(null,cljs.core.constant$keyword$1613,expr__53857))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__53856.cljs$core$IFn$_invoke$arity$2 ? pred__53856.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1614,expr__53857) : pred__53856.call(null,cljs.core.constant$keyword$1614,expr__53857))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1611,(retry_count - (1))));
});})(socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__53855,map__53855__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj53862 = {"detail":url};return obj53862;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1319,cljs.core.constant$keyword$1207], null)),get_essential_messages(cljs.core.constant$keyword$1615.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__53863){var map__53865 = p__53863;var map__53865__$1 = ((cljs.core.seq_QMARK_(map__53865))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53865):map__53865);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53865__$1,cljs.core.constant$keyword$1207);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53865__$1,cljs.core.constant$keyword$1319);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__53866){var map__53872 = p__53866;var map__53872__$1 = ((cljs.core.seq_QMARK_(map__53872))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53872):map__53872);var ed = map__53872__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,cljs.core.constant$keyword$1616);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,cljs.core.constant$keyword$1617);console.debug("Figwheel: Compile Exception");
var seq__53873_53877 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__53874_53878 = null;var count__53875_53879 = (0);var i__53876_53880 = (0);while(true){
if((i__53876_53880 < count__53875_53879))
{var msg_53881 = chunk__53874_53878.cljs$core$IIndexed$_nth$arity$2(null,i__53876_53880);console.log(msg_53881);
{
var G__53882 = seq__53873_53877;
var G__53883 = chunk__53874_53878;
var G__53884 = count__53875_53879;
var G__53885 = (i__53876_53880 + (1));
seq__53873_53877 = G__53882;
chunk__53874_53878 = G__53883;
count__53875_53879 = G__53884;
i__53876_53880 = G__53885;
continue;
}
} else
{var temp__4126__auto___53886 = cljs.core.seq(seq__53873_53877);if(temp__4126__auto___53886)
{var seq__53873_53887__$1 = temp__4126__auto___53886;if(cljs.core.chunked_seq_QMARK_(seq__53873_53887__$1))
{var c__4314__auto___53888 = cljs.core.chunk_first(seq__53873_53887__$1);{
var G__53889 = cljs.core.chunk_rest(seq__53873_53887__$1);
var G__53890 = c__4314__auto___53888;
var G__53891 = cljs.core.count(c__4314__auto___53888);
var G__53892 = (0);
seq__53873_53877 = G__53889;
chunk__53874_53878 = G__53890;
count__53875_53879 = G__53891;
i__53876_53880 = G__53892;
continue;
}
} else
{var msg_53893 = cljs.core.first(seq__53873_53887__$1);console.log(msg_53893);
{
var G__53894 = cljs.core.next(seq__53873_53887__$1);
var G__53895 = null;
var G__53896 = (0);
var G__53897 = (0);
seq__53873_53877 = G__53894;
chunk__53874_53878 = G__53895;
count__53875_53879 = G__53896;
i__53876_53880 = G__53897;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1603,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1611,(100),cljs.core.constant$keyword$1610,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1604,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1610.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1607,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1605,figwheel.client.default_before_load,cljs.core.constant$keyword$1609,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1602,cljs.core.identity,cljs.core.constant$keyword$1598,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__53898){var map__53900 = p__53898;var map__53900__$1 = ((cljs.core.seq_QMARK_(map__53900))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53900):map__53900);var opts = map__53900__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__53898 = null;if (arguments.length > 0) {
  p__53898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__53898);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__53901){
var p__53898 = cljs.core.seq(arglist__53901);
return watch_and_reload__delegate(p__53898);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
