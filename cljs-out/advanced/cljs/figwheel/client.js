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
var log__delegate = function (p__53649,args){var map__53651 = p__53649;var map__53651__$1 = ((cljs.core.seq_QMARK_(map__53651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53651):map__53651);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53651__$1,cljs.core.constant$keyword$1597);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__53649,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__53649,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__53652){
var p__53649 = cljs.core.first(arglist__53652);
var args = cljs.core.rest(arglist__53652);
return log__delegate(p__53649,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__53653){var map__53655 = p__53653;var map__53655__$1 = ((cljs.core.seq_QMARK_(map__53655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53655):map__53655);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53655__$1,cljs.core.constant$keyword$1598);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__53656,callback){var map__53658 = p__53656;var map__53658__$1 = ((cljs.core.seq_QMARK_(map__53658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53658):map__53658);var msg = map__53658__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,cljs.core.constant$keyword$1599);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,cljs.core.constant$keyword$1600);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,cljs.core.constant$keyword$1601);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__53658,map__53658__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__53658,map__53658__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__53659,p__53660){var map__53663 = p__53659;var map__53663__$1 = ((cljs.core.seq_QMARK_(map__53663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53663):map__53663);var opts = map__53663__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,cljs.core.constant$keyword$1602);var map__53664 = p__53660;var map__53664__$1 = ((cljs.core.seq_QMARK_(map__53664))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53664):map__53664);var d = map__53664__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,cljs.core.constant$keyword$1603);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1601,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__53665,p__53666){var map__53708 = p__53665;var map__53708__$1 = ((cljs.core.seq_QMARK_(map__53708))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53708):map__53708);var opts = map__53708__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,cljs.core.constant$keyword$1604);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,cljs.core.constant$keyword$1605);var map__53709 = p__53666;var map__53709__$1 = ((cljs.core.seq_QMARK_(map__53709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53709):map__53709);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53709__$1,cljs.core.constant$keyword$1606);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__53708,map__53708__$1,opts,on_jsload,before_jsload,map__53709,map__53709__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__53708,map__53708__$1,opts,on_jsload,before_jsload,map__53709,map__53709__$1,files){
return (function (state_53732){var state_val_53733 = (state_53732[(1)]);if((state_val_53733 === (6)))
{var inst_53714 = (state_53732[(7)]);var inst_53723 = (state_53732[(2)]);var inst_53724 = cljs.core.PersistentVector.EMPTY_NODE;var inst_53725 = [inst_53714];var inst_53726 = (new cljs.core.PersistentVector(null,1,(5),inst_53724,inst_53725,null));var inst_53727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_53726);var state_53732__$1 = (function (){var statearr_53734 = state_53732;(statearr_53734[(8)] = inst_53723);
return statearr_53734;
})();var statearr_53735_53749 = state_53732__$1;(statearr_53735_53749[(2)] = inst_53727);
(statearr_53735_53749[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_53733 === (5)))
{var inst_53730 = (state_53732[(2)]);var state_53732__$1 = state_53732;return cljs.core.async.impl.ioc_helpers.return_chan(state_53732__$1,inst_53730);
} else
{if((state_val_53733 === (4)))
{var state_53732__$1 = state_53732;var statearr_53736_53750 = state_53732__$1;(statearr_53736_53750[(2)] = null);
(statearr_53736_53750[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_53733 === (3)))
{var inst_53714 = (state_53732[(7)]);var inst_53717 = console.debug("Figwheel: loaded these files");var inst_53718 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1603,inst_53714);var inst_53719 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_53718], 0));var inst_53720 = console.log(inst_53719);var inst_53721 = cljs.core.async.timeout((10));var state_53732__$1 = (function (){var statearr_53737 = state_53732;(statearr_53737[(9)] = inst_53717);
(statearr_53737[(10)] = inst_53720);
return statearr_53737;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53732__$1,(6),inst_53721);
} else
{if((state_val_53733 === (2)))
{var inst_53714 = (state_53732[(7)]);var inst_53714__$1 = (state_53732[(2)]);var inst_53715 = cljs.core.not_empty(inst_53714__$1);var state_53732__$1 = (function (){var statearr_53738 = state_53732;(statearr_53738[(7)] = inst_53714__$1);
return statearr_53738;
})();if(cljs.core.truth_(inst_53715))
{var statearr_53739_53751 = state_53732__$1;(statearr_53739_53751[(1)] = (3));
} else
{var statearr_53740_53752 = state_53732__$1;(statearr_53740_53752[(1)] = (4));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_53733 === (1)))
{var inst_53710 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_53711 = figwheel.client.add_request_urls(opts,files);var inst_53712 = figwheel.client.load_all_js_files(inst_53711);var state_53732__$1 = (function (){var statearr_53741 = state_53732;(statearr_53741[(11)] = inst_53710);
return statearr_53741;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53732__$1,(2),inst_53712);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__53708,map__53708__$1,opts,on_jsload,before_jsload,map__53709,map__53709__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__53708,map__53708__$1,opts,on_jsload,before_jsload,map__53709,map__53709__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53745 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53745[(0)] = state_machine__5694__auto__);
(statearr_53745[(1)] = (1));
return statearr_53745;
});
var state_machine__5694__auto____1 = (function (state_53732){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53732);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53746){if((e53746 instanceof Object))
{var ex__5697__auto__ = e53746;var statearr_53747_53753 = state_53732;(statearr_53747_53753[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53732);
return cljs.core.constant$keyword$1094;
} else
{throw e53746;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__53754 = state_53732;
state_53732 = G__53754;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53732){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__53708,map__53708__$1,opts,on_jsload,before_jsload,map__53709,map__53709__$1,files))
})();var state__5710__auto__ = (function (){var statearr_53748 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__53708,map__53708__$1,opts,on_jsload,before_jsload,map__53709,map__53709__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__53755,link_href){var map__53757 = p__53755;var map__53757__$1 = ((cljs.core.seq_QMARK_(map__53757))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53757):map__53757);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53757__$1,cljs.core.constant$keyword$1601);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53757__$1,cljs.core.constant$keyword$1603);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
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
return (function (state_53778){var state_val_53779 = (state_53778[(1)]);if((state_val_53779 === (2)))
{var inst_53775 = (state_53778[(2)]);var inst_53776 = parent.removeChild(orig_link);var state_53778__$1 = (function (){var statearr_53780 = state_53778;(statearr_53780[(7)] = inst_53775);
return statearr_53780;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53778__$1,inst_53776);
} else
{if((state_val_53779 === (1)))
{var inst_53773 = cljs.core.async.timeout((200));var state_53778__$1 = state_53778;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53778__$1,(2),inst_53773);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53784 = [null,null,null,null,null,null,null,null];(statearr_53784[(0)] = state_machine__5694__auto__);
(statearr_53784[(1)] = (1));
return statearr_53784;
});
var state_machine__5694__auto____1 = (function (state_53778){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53778);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53785){if((e53785 instanceof Object))
{var ex__5697__auto__ = e53785;var statearr_53786_53788 = state_53778;(statearr_53786_53788[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53778);
return cljs.core.constant$keyword$1094;
} else
{throw e53785;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__53789 = state_53778;
state_53778 = G__53789;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53778){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_53787 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53787;
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
figwheel.client.reload_css_file = (function reload_css_file(p__53790){var map__53792 = p__53790;var map__53792__$1 = ((cljs.core.seq_QMARK_(map__53792))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53792):map__53792);var f_data = map__53792__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,cljs.core.constant$keyword$1601);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,cljs.core.constant$keyword$1603);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__53793,files_msg){var map__53815 = p__53793;var map__53815__$1 = ((cljs.core.seq_QMARK_(map__53815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53815):map__53815);var opts = map__53815__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53815__$1,cljs.core.constant$keyword$1607);var seq__53816_53836 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1606.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__53817_53837 = null;var count__53818_53838 = (0);var i__53819_53839 = (0);while(true){
if((i__53819_53839 < count__53818_53838))
{var f_53840 = chunk__53817_53837.cljs$core$IIndexed$_nth$arity$2(null,i__53819_53839);figwheel.client.reload_css_file(f_53840);
{
var G__53841 = seq__53816_53836;
var G__53842 = chunk__53817_53837;
var G__53843 = count__53818_53838;
var G__53844 = (i__53819_53839 + (1));
seq__53816_53836 = G__53841;
chunk__53817_53837 = G__53842;
count__53818_53838 = G__53843;
i__53819_53839 = G__53844;
continue;
}
} else
{var temp__4126__auto___53845 = cljs.core.seq(seq__53816_53836);if(temp__4126__auto___53845)
{var seq__53816_53846__$1 = temp__4126__auto___53845;if(cljs.core.chunked_seq_QMARK_(seq__53816_53846__$1))
{var c__4314__auto___53847 = cljs.core.chunk_first(seq__53816_53846__$1);{
var G__53848 = cljs.core.chunk_rest(seq__53816_53846__$1);
var G__53849 = c__4314__auto___53847;
var G__53850 = cljs.core.count(c__4314__auto___53847);
var G__53851 = (0);
seq__53816_53836 = G__53848;
chunk__53817_53837 = G__53849;
count__53818_53838 = G__53850;
i__53819_53839 = G__53851;
continue;
}
} else
{var f_53852 = cljs.core.first(seq__53816_53846__$1);figwheel.client.reload_css_file(f_53852);
{
var G__53853 = cljs.core.next(seq__53816_53846__$1);
var G__53854 = null;
var G__53855 = (0);
var G__53856 = (0);
seq__53816_53836 = G__53853;
chunk__53817_53837 = G__53854;
count__53818_53838 = G__53855;
i__53819_53839 = G__53856;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__53815,map__53815__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__53815,map__53815__$1,opts,on_cssload){
return (function (state_53826){var state_val_53827 = (state_53826[(1)]);if((state_val_53827 === (2)))
{var inst_53822 = (state_53826[(2)]);var inst_53823 = cljs.core.constant$keyword$1606.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_53824 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_53823) : on_cssload.call(null,inst_53823));var state_53826__$1 = (function (){var statearr_53828 = state_53826;(statearr_53828[(7)] = inst_53822);
return statearr_53828;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53826__$1,inst_53824);
} else
{if((state_val_53827 === (1)))
{var inst_53820 = cljs.core.async.timeout((100));var state_53826__$1 = state_53826;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53826__$1,(2),inst_53820);
} else
{return null;
}
}
});})(c__5708__auto__,map__53815,map__53815__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__53815,map__53815__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53832 = [null,null,null,null,null,null,null,null];(statearr_53832[(0)] = state_machine__5694__auto__);
(statearr_53832[(1)] = (1));
return statearr_53832;
});
var state_machine__5694__auto____1 = (function (state_53826){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53826);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53833){if((e53833 instanceof Object))
{var ex__5697__auto__ = e53833;var statearr_53834_53857 = state_53826;(statearr_53834_53857[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53826);
return cljs.core.constant$keyword$1094;
} else
{throw e53833;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__53858 = state_53826;
state_53826 = G__53858;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53826){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__53815,map__53815__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_53835 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__53815,map__53815__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__53859){var map__53864 = p__53859;var map__53864__$1 = ((cljs.core.seq_QMARK_(map__53864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53864):map__53864);var opts = map__53864__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,cljs.core.constant$keyword$1609);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,cljs.core.constant$keyword$1610);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,cljs.core.constant$keyword$1598);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,cljs.core.constant$keyword$1611);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__53865 = cljs.core._EQ_;var expr__53866 = cljs.core.constant$keyword$1608.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__53865.cljs$core$IFn$_invoke$arity$2 ? pred__53865.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1612,expr__53866) : pred__53865.call(null,cljs.core.constant$keyword$1612,expr__53866))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__53865.cljs$core$IFn$_invoke$arity$2 ? pred__53865.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1613,expr__53866) : pred__53865.call(null,cljs.core.constant$keyword$1613,expr__53866))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__53865.cljs$core$IFn$_invoke$arity$2 ? pred__53865.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1614,expr__53866) : pred__53865.call(null,cljs.core.constant$keyword$1614,expr__53866))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1611,(retry_count - (1))));
});})(socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__53864,map__53864__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj53871 = {"detail":url};return obj53871;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1319,cljs.core.constant$keyword$1207], null)),get_essential_messages(cljs.core.constant$keyword$1615.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__53872){var map__53874 = p__53872;var map__53874__$1 = ((cljs.core.seq_QMARK_(map__53874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53874):map__53874);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53874__$1,cljs.core.constant$keyword$1207);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53874__$1,cljs.core.constant$keyword$1319);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__53875){var map__53881 = p__53875;var map__53881__$1 = ((cljs.core.seq_QMARK_(map__53881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53881):map__53881);var ed = map__53881__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53881__$1,cljs.core.constant$keyword$1616);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53881__$1,cljs.core.constant$keyword$1617);console.debug("Figwheel: Compile Exception");
var seq__53882_53886 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__53883_53887 = null;var count__53884_53888 = (0);var i__53885_53889 = (0);while(true){
if((i__53885_53889 < count__53884_53888))
{var msg_53890 = chunk__53883_53887.cljs$core$IIndexed$_nth$arity$2(null,i__53885_53889);console.log(msg_53890);
{
var G__53891 = seq__53882_53886;
var G__53892 = chunk__53883_53887;
var G__53893 = count__53884_53888;
var G__53894 = (i__53885_53889 + (1));
seq__53882_53886 = G__53891;
chunk__53883_53887 = G__53892;
count__53884_53888 = G__53893;
i__53885_53889 = G__53894;
continue;
}
} else
{var temp__4126__auto___53895 = cljs.core.seq(seq__53882_53886);if(temp__4126__auto___53895)
{var seq__53882_53896__$1 = temp__4126__auto___53895;if(cljs.core.chunked_seq_QMARK_(seq__53882_53896__$1))
{var c__4314__auto___53897 = cljs.core.chunk_first(seq__53882_53896__$1);{
var G__53898 = cljs.core.chunk_rest(seq__53882_53896__$1);
var G__53899 = c__4314__auto___53897;
var G__53900 = cljs.core.count(c__4314__auto___53897);
var G__53901 = (0);
seq__53882_53886 = G__53898;
chunk__53883_53887 = G__53899;
count__53884_53888 = G__53900;
i__53885_53889 = G__53901;
continue;
}
} else
{var msg_53902 = cljs.core.first(seq__53882_53896__$1);console.log(msg_53902);
{
var G__53903 = cljs.core.next(seq__53882_53896__$1);
var G__53904 = null;
var G__53905 = (0);
var G__53906 = (0);
seq__53882_53886 = G__53903;
chunk__53883_53887 = G__53904;
count__53884_53888 = G__53905;
i__53885_53889 = G__53906;
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
var watch_and_reload__delegate = function (p__53907){var map__53909 = p__53907;var map__53909__$1 = ((cljs.core.seq_QMARK_(map__53909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53909):map__53909);var opts = map__53909__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__53907 = null;if (arguments.length > 0) {
  p__53907 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__53907);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__53910){
var p__53907 = cljs.core.seq(arglist__53910);
return watch_and_reload__delegate(p__53907);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
