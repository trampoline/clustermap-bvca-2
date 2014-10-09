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
var log__delegate = function (p__19734,args){var map__19736 = p__19734;var map__19736__$1 = ((cljs.core.seq_QMARK_.call(null,map__19736))?cljs.core.apply.call(null,cljs.core.hash_map,map__19736):map__19736);var debug = cljs.core.get.call(null,map__19736__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19734,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19734,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19737){
var p__19734 = cljs.core.first(arglist__19737);
var args = cljs.core.rest(arglist__19737);
return log__delegate(p__19734,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19738){var map__19740 = p__19738;var map__19740__$1 = ((cljs.core.seq_QMARK_.call(null,map__19740))?cljs.core.apply.call(null,cljs.core.hash_map,map__19740):map__19740);var websocket_url = cljs.core.get.call(null,map__19740__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19741,callback){var map__19743 = p__19741;var map__19743__$1 = ((cljs.core.seq_QMARK_.call(null,map__19743))?cljs.core.apply.call(null,cljs.core.hash_map,map__19743):map__19743);var msg = map__19743__$1;var dependency_file = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__19743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19743,map__19743__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19743,map__19743__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__19744,p__19745){var map__19748 = p__19744;var map__19748__$1 = ((cljs.core.seq_QMARK_.call(null,map__19748))?cljs.core.apply.call(null,cljs.core.hash_map,map__19748):map__19748);var opts = map__19748__$1;var url_rewriter = cljs.core.get.call(null,map__19748__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__19749 = p__19745;var map__19749__$1 = ((cljs.core.seq_QMARK_.call(null,map__19749))?cljs.core.apply.call(null,cljs.core.hash_map,map__19749):map__19749);var d = map__19749__$1;var file = cljs.core.get.call(null,map__19749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19750,p__19751){var map__19793 = p__19750;var map__19793__$1 = ((cljs.core.seq_QMARK_.call(null,map__19793))?cljs.core.apply.call(null,cljs.core.hash_map,map__19793):map__19793);var opts = map__19793__$1;var on_jsload = cljs.core.get.call(null,map__19793__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__19793__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__19794 = p__19751;var map__19794__$1 = ((cljs.core.seq_QMARK_.call(null,map__19794))?cljs.core.apply.call(null,cljs.core.hash_map,map__19794):map__19794);var files = cljs.core.get.call(null,map__19794__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19793,map__19793__$1,opts,on_jsload,before_jsload,map__19794,map__19794__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19793,map__19793__$1,opts,on_jsload,before_jsload,map__19794,map__19794__$1,files){
return (function (state_19817){var state_val_19818 = (state_19817[(1)]);if((state_val_19818 === (6)))
{var inst_19799 = (state_19817[(7)]);var inst_19808 = (state_19817[(2)]);var inst_19809 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19810 = [inst_19799];var inst_19811 = (new cljs.core.PersistentVector(null,1,(5),inst_19809,inst_19810,null));var inst_19812 = cljs.core.apply.call(null,on_jsload,inst_19811);var state_19817__$1 = (function (){var statearr_19819 = state_19817;(statearr_19819[(8)] = inst_19808);
return statearr_19819;
})();var statearr_19820_19834 = state_19817__$1;(statearr_19820_19834[(2)] = inst_19812);
(statearr_19820_19834[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19818 === (5)))
{var inst_19815 = (state_19817[(2)]);var state_19817__$1 = state_19817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19817__$1,inst_19815);
} else
{if((state_val_19818 === (4)))
{var state_19817__$1 = state_19817;var statearr_19821_19835 = state_19817__$1;(statearr_19821_19835[(2)] = null);
(statearr_19821_19835[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19818 === (3)))
{var inst_19799 = (state_19817[(7)]);var inst_19802 = console.debug("Figwheel: loaded these files");var inst_19803 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19799);var inst_19804 = cljs.core.prn_str.call(null,inst_19803);var inst_19805 = console.log(inst_19804);var inst_19806 = cljs.core.async.timeout.call(null,(10));var state_19817__$1 = (function (){var statearr_19822 = state_19817;(statearr_19822[(9)] = inst_19802);
(statearr_19822[(10)] = inst_19805);
return statearr_19822;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19817__$1,(6),inst_19806);
} else
{if((state_val_19818 === (2)))
{var inst_19799 = (state_19817[(7)]);var inst_19799__$1 = (state_19817[(2)]);var inst_19800 = cljs.core.not_empty.call(null,inst_19799__$1);var state_19817__$1 = (function (){var statearr_19823 = state_19817;(statearr_19823[(7)] = inst_19799__$1);
return statearr_19823;
})();if(cljs.core.truth_(inst_19800))
{var statearr_19824_19836 = state_19817__$1;(statearr_19824_19836[(1)] = (3));
} else
{var statearr_19825_19837 = state_19817__$1;(statearr_19825_19837[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19818 === (1)))
{var inst_19795 = before_jsload.call(null,files);var inst_19796 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19797 = figwheel.client.load_all_js_files.call(null,inst_19796);var state_19817__$1 = (function (){var statearr_19826 = state_19817;(statearr_19826[(11)] = inst_19795);
return statearr_19826;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19817__$1,(2),inst_19797);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__19793,map__19793__$1,opts,on_jsload,before_jsload,map__19794,map__19794__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19793,map__19793__$1,opts,on_jsload,before_jsload,map__19794,map__19794__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19830 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19830[(0)] = state_machine__5694__auto__);
(statearr_19830[(1)] = (1));
return statearr_19830;
});
var state_machine__5694__auto____1 = (function (state_19817){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19817);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19831){if((e19831 instanceof Object))
{var ex__5697__auto__ = e19831;var statearr_19832_19838 = state_19817;(statearr_19832_19838[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19831;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19839 = state_19817;
state_19817 = G__19839;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19817){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19793,map__19793__$1,opts,on_jsload,before_jsload,map__19794,map__19794__$1,files))
})();var state__5710__auto__ = (function (){var statearr_19833 = f__5709__auto__.call(null);(statearr_19833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19793,map__19793__$1,opts,on_jsload,before_jsload,map__19794,map__19794__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19840,link_href){var map__19842 = p__19840;var map__19842__$1 = ((cljs.core.seq_QMARK_.call(null,map__19842))?cljs.core.apply.call(null,cljs.core.hash_map,map__19842):map__19842);var request_url = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19842__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_19863){var state_val_19864 = (state_19863[(1)]);if((state_val_19864 === (2)))
{var inst_19860 = (state_19863[(2)]);var inst_19861 = parent.removeChild(orig_link);var state_19863__$1 = (function (){var statearr_19865 = state_19863;(statearr_19865[(7)] = inst_19860);
return statearr_19865;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19863__$1,inst_19861);
} else
{if((state_val_19864 === (1)))
{var inst_19858 = cljs.core.async.timeout.call(null,(200));var state_19863__$1 = state_19863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19863__$1,(2),inst_19858);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19869 = [null,null,null,null,null,null,null,null];(statearr_19869[(0)] = state_machine__5694__auto__);
(statearr_19869[(1)] = (1));
return statearr_19869;
});
var state_machine__5694__auto____1 = (function (state_19863){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19870){if((e19870 instanceof Object))
{var ex__5697__auto__ = e19870;var statearr_19871_19873 = state_19863;(statearr_19871_19873[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19863);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19870;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19874 = state_19863;
state_19863 = G__19874;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19863){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_19872 = f__5709__auto__.call(null);(statearr_19872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
figwheel.client.reload_css_file = (function reload_css_file(p__19875){var map__19877 = p__19875;var map__19877__$1 = ((cljs.core.seq_QMARK_.call(null,map__19877))?cljs.core.apply.call(null,cljs.core.hash_map,map__19877):map__19877);var f_data = map__19877__$1;var request_url = cljs.core.get.call(null,map__19877__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19878,files_msg){var map__19900 = p__19878;var map__19900__$1 = ((cljs.core.seq_QMARK_.call(null,map__19900))?cljs.core.apply.call(null,cljs.core.hash_map,map__19900):map__19900);var opts = map__19900__$1;var on_cssload = cljs.core.get.call(null,map__19900__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__19901_19921 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19902_19922 = null;var count__19903_19923 = (0);var i__19904_19924 = (0);while(true){
if((i__19904_19924 < count__19903_19923))
{var f_19925 = cljs.core._nth.call(null,chunk__19902_19922,i__19904_19924);figwheel.client.reload_css_file.call(null,f_19925);
{
var G__19926 = seq__19901_19921;
var G__19927 = chunk__19902_19922;
var G__19928 = count__19903_19923;
var G__19929 = (i__19904_19924 + (1));
seq__19901_19921 = G__19926;
chunk__19902_19922 = G__19927;
count__19903_19923 = G__19928;
i__19904_19924 = G__19929;
continue;
}
} else
{var temp__4126__auto___19930 = cljs.core.seq.call(null,seq__19901_19921);if(temp__4126__auto___19930)
{var seq__19901_19931__$1 = temp__4126__auto___19930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19901_19931__$1))
{var c__4314__auto___19932 = cljs.core.chunk_first.call(null,seq__19901_19931__$1);{
var G__19933 = cljs.core.chunk_rest.call(null,seq__19901_19931__$1);
var G__19934 = c__4314__auto___19932;
var G__19935 = cljs.core.count.call(null,c__4314__auto___19932);
var G__19936 = (0);
seq__19901_19921 = G__19933;
chunk__19902_19922 = G__19934;
count__19903_19923 = G__19935;
i__19904_19924 = G__19936;
continue;
}
} else
{var f_19937 = cljs.core.first.call(null,seq__19901_19931__$1);figwheel.client.reload_css_file.call(null,f_19937);
{
var G__19938 = cljs.core.next.call(null,seq__19901_19931__$1);
var G__19939 = null;
var G__19940 = (0);
var G__19941 = (0);
seq__19901_19921 = G__19938;
chunk__19902_19922 = G__19939;
count__19903_19923 = G__19940;
i__19904_19924 = G__19941;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19900,map__19900__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19900,map__19900__$1,opts,on_cssload){
return (function (state_19911){var state_val_19912 = (state_19911[(1)]);if((state_val_19912 === (2)))
{var inst_19907 = (state_19911[(2)]);var inst_19908 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19909 = on_cssload.call(null,inst_19908);var state_19911__$1 = (function (){var statearr_19913 = state_19911;(statearr_19913[(7)] = inst_19907);
return statearr_19913;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19911__$1,inst_19909);
} else
{if((state_val_19912 === (1)))
{var inst_19905 = cljs.core.async.timeout.call(null,(100));var state_19911__$1 = state_19911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19911__$1,(2),inst_19905);
} else
{return null;
}
}
});})(c__5708__auto__,map__19900,map__19900__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19900,map__19900__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19917 = [null,null,null,null,null,null,null,null];(statearr_19917[(0)] = state_machine__5694__auto__);
(statearr_19917[(1)] = (1));
return statearr_19917;
});
var state_machine__5694__auto____1 = (function (state_19911){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19918){if((e19918 instanceof Object))
{var ex__5697__auto__ = e19918;var statearr_19919_19942 = state_19911;(statearr_19919_19942[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19911);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19943 = state_19911;
state_19911 = G__19943;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19911){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19900,map__19900__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_19920 = f__5709__auto__.call(null);(statearr_19920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19900,map__19900__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19944){var map__19949 = p__19944;var map__19949__$1 = ((cljs.core.seq_QMARK_.call(null,map__19949))?cljs.core.apply.call(null,cljs.core.hash_map,map__19949):map__19949);var opts = map__19949__$1;var on_compile_fail = cljs.core.get.call(null,map__19949__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__19949__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__19949__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__19949__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19950 = cljs.core._EQ_;var expr__19951 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19950.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__19951)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19950.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__19951)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19950.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19951)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19949,map__19949__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19956 = {"detail":url};return obj19956;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19957){var map__19959 = p__19957;var map__19959__$1 = ((cljs.core.seq_QMARK_.call(null,map__19959))?cljs.core.apply.call(null,cljs.core.hash_map,map__19959):map__19959);var class$ = cljs.core.get.call(null,map__19959__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__19959__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19960){var map__19966 = p__19960;var map__19966__$1 = ((cljs.core.seq_QMARK_.call(null,map__19966))?cljs.core.apply.call(null,cljs.core.hash_map,map__19966):map__19966);var ed = map__19966__$1;var exception_data = cljs.core.get.call(null,map__19966__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__19966__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__19967_19971 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19968_19972 = null;var count__19969_19973 = (0);var i__19970_19974 = (0);while(true){
if((i__19970_19974 < count__19969_19973))
{var msg_19975 = cljs.core._nth.call(null,chunk__19968_19972,i__19970_19974);console.log(msg_19975);
{
var G__19976 = seq__19967_19971;
var G__19977 = chunk__19968_19972;
var G__19978 = count__19969_19973;
var G__19979 = (i__19970_19974 + (1));
seq__19967_19971 = G__19976;
chunk__19968_19972 = G__19977;
count__19969_19973 = G__19978;
i__19970_19974 = G__19979;
continue;
}
} else
{var temp__4126__auto___19980 = cljs.core.seq.call(null,seq__19967_19971);if(temp__4126__auto___19980)
{var seq__19967_19981__$1 = temp__4126__auto___19980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19967_19981__$1))
{var c__4314__auto___19982 = cljs.core.chunk_first.call(null,seq__19967_19981__$1);{
var G__19983 = cljs.core.chunk_rest.call(null,seq__19967_19981__$1);
var G__19984 = c__4314__auto___19982;
var G__19985 = cljs.core.count.call(null,c__4314__auto___19982);
var G__19986 = (0);
seq__19967_19971 = G__19983;
chunk__19968_19972 = G__19984;
count__19969_19973 = G__19985;
i__19970_19974 = G__19986;
continue;
}
} else
{var msg_19987 = cljs.core.first.call(null,seq__19967_19981__$1);console.log(msg_19987);
{
var G__19988 = cljs.core.next.call(null,seq__19967_19981__$1);
var G__19989 = null;
var G__19990 = (0);
var G__19991 = (0);
seq__19967_19971 = G__19988;
chunk__19968_19972 = G__19989;
count__19969_19973 = G__19990;
i__19970_19974 = G__19991;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__19992){var map__19994 = p__19992;var map__19994__$1 = ((cljs.core.seq_QMARK_.call(null,map__19994))?cljs.core.apply.call(null,cljs.core.hash_map,map__19994):map__19994);var opts = map__19994__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19992 = null;if (arguments.length > 0) {
  p__19992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19992);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19995){
var p__19992 = cljs.core.seq(arglist__19995);
return watch_and_reload__delegate(p__19992);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
