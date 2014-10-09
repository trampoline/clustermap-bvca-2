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
var log__delegate = function (p__38720,args){var map__38722 = p__38720;var map__38722__$1 = ((cljs.core.seq_QMARK_.call(null,map__38722))?cljs.core.apply.call(null,cljs.core.hash_map,map__38722):map__38722);var debug = cljs.core.get.call(null,map__38722__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__38720,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__38720,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__38723){
var p__38720 = cljs.core.first(arglist__38723);
var args = cljs.core.rest(arglist__38723);
return log__delegate(p__38720,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__38724){var map__38726 = p__38724;var map__38726__$1 = ((cljs.core.seq_QMARK_.call(null,map__38726))?cljs.core.apply.call(null,cljs.core.hash_map,map__38726):map__38726);var websocket_url = cljs.core.get.call(null,map__38726__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__38727,callback){var map__38729 = p__38727;var map__38729__$1 = ((cljs.core.seq_QMARK_.call(null,map__38729))?cljs.core.apply.call(null,cljs.core.hash_map,map__38729):map__38729);var msg = map__38729__$1;var dependency_file = cljs.core.get.call(null,map__38729__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__38729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__38729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__38729,map__38729__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__38729,map__38729__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__38730,p__38731){var map__38734 = p__38730;var map__38734__$1 = ((cljs.core.seq_QMARK_.call(null,map__38734))?cljs.core.apply.call(null,cljs.core.hash_map,map__38734):map__38734);var opts = map__38734__$1;var url_rewriter = cljs.core.get.call(null,map__38734__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__38735 = p__38731;var map__38735__$1 = ((cljs.core.seq_QMARK_.call(null,map__38735))?cljs.core.apply.call(null,cljs.core.hash_map,map__38735):map__38735);var d = map__38735__$1;var file = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__38736,p__38737){var map__38779 = p__38736;var map__38779__$1 = ((cljs.core.seq_QMARK_.call(null,map__38779))?cljs.core.apply.call(null,cljs.core.hash_map,map__38779):map__38779);var opts = map__38779__$1;var on_jsload = cljs.core.get.call(null,map__38779__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__38779__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__38780 = p__38737;var map__38780__$1 = ((cljs.core.seq_QMARK_.call(null,map__38780))?cljs.core.apply.call(null,cljs.core.hash_map,map__38780):map__38780);var files = cljs.core.get.call(null,map__38780__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__38779,map__38779__$1,opts,on_jsload,before_jsload,map__38780,map__38780__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__38779,map__38779__$1,opts,on_jsload,before_jsload,map__38780,map__38780__$1,files){
return (function (state_38803){var state_val_38804 = (state_38803[(1)]);if((state_val_38804 === (6)))
{var inst_38785 = (state_38803[(7)]);var inst_38794 = (state_38803[(2)]);var inst_38795 = cljs.core.PersistentVector.EMPTY_NODE;var inst_38796 = [inst_38785];var inst_38797 = (new cljs.core.PersistentVector(null,1,(5),inst_38795,inst_38796,null));var inst_38798 = cljs.core.apply.call(null,on_jsload,inst_38797);var state_38803__$1 = (function (){var statearr_38805 = state_38803;(statearr_38805[(8)] = inst_38794);
return statearr_38805;
})();var statearr_38806_38820 = state_38803__$1;(statearr_38806_38820[(2)] = inst_38798);
(statearr_38806_38820[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38804 === (5)))
{var inst_38801 = (state_38803[(2)]);var state_38803__$1 = state_38803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38803__$1,inst_38801);
} else
{if((state_val_38804 === (4)))
{var state_38803__$1 = state_38803;var statearr_38807_38821 = state_38803__$1;(statearr_38807_38821[(2)] = null);
(statearr_38807_38821[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38804 === (3)))
{var inst_38785 = (state_38803[(7)]);var inst_38788 = console.debug("Figwheel: loaded these files");var inst_38789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38785);var inst_38790 = cljs.core.prn_str.call(null,inst_38789);var inst_38791 = console.log(inst_38790);var inst_38792 = cljs.core.async.timeout.call(null,(10));var state_38803__$1 = (function (){var statearr_38808 = state_38803;(statearr_38808[(9)] = inst_38791);
(statearr_38808[(10)] = inst_38788);
return statearr_38808;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38803__$1,(6),inst_38792);
} else
{if((state_val_38804 === (2)))
{var inst_38785 = (state_38803[(7)]);var inst_38785__$1 = (state_38803[(2)]);var inst_38786 = cljs.core.not_empty.call(null,inst_38785__$1);var state_38803__$1 = (function (){var statearr_38809 = state_38803;(statearr_38809[(7)] = inst_38785__$1);
return statearr_38809;
})();if(cljs.core.truth_(inst_38786))
{var statearr_38810_38822 = state_38803__$1;(statearr_38810_38822[(1)] = (3));
} else
{var statearr_38811_38823 = state_38803__$1;(statearr_38811_38823[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38804 === (1)))
{var inst_38781 = before_jsload.call(null,files);var inst_38782 = figwheel.client.add_request_urls.call(null,opts,files);var inst_38783 = figwheel.client.load_all_js_files.call(null,inst_38782);var state_38803__$1 = (function (){var statearr_38812 = state_38803;(statearr_38812[(11)] = inst_38781);
return statearr_38812;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38803__$1,(2),inst_38783);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__38779,map__38779__$1,opts,on_jsload,before_jsload,map__38780,map__38780__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__38779,map__38779__$1,opts,on_jsload,before_jsload,map__38780,map__38780__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38816 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38816[(0)] = state_machine__5694__auto__);
(statearr_38816[(1)] = (1));
return statearr_38816;
});
var state_machine__5694__auto____1 = (function (state_38803){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38817){if((e38817 instanceof Object))
{var ex__5697__auto__ = e38817;var statearr_38818_38824 = state_38803;(statearr_38818_38824[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38803);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38825 = state_38803;
state_38803 = G__38825;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38803){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__38779,map__38779__$1,opts,on_jsload,before_jsload,map__38780,map__38780__$1,files))
})();var state__5710__auto__ = (function (){var statearr_38819 = f__5709__auto__.call(null);(statearr_38819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__38779,map__38779__$1,opts,on_jsload,before_jsload,map__38780,map__38780__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__38826,link_href){var map__38828 = p__38826;var map__38828__$1 = ((cljs.core.seq_QMARK_.call(null,map__38828))?cljs.core.apply.call(null,cljs.core.hash_map,map__38828):map__38828);var request_url = cljs.core.get.call(null,map__38828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_38849){var state_val_38850 = (state_38849[(1)]);if((state_val_38850 === (2)))
{var inst_38846 = (state_38849[(2)]);var inst_38847 = parent.removeChild(orig_link);var state_38849__$1 = (function (){var statearr_38851 = state_38849;(statearr_38851[(7)] = inst_38846);
return statearr_38851;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38849__$1,inst_38847);
} else
{if((state_val_38850 === (1)))
{var inst_38844 = cljs.core.async.timeout.call(null,(200));var state_38849__$1 = state_38849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38849__$1,(2),inst_38844);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38855 = [null,null,null,null,null,null,null,null];(statearr_38855[(0)] = state_machine__5694__auto__);
(statearr_38855[(1)] = (1));
return statearr_38855;
});
var state_machine__5694__auto____1 = (function (state_38849){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38849);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38856){if((e38856 instanceof Object))
{var ex__5697__auto__ = e38856;var statearr_38857_38859 = state_38849;(statearr_38857_38859[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38856;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38860 = state_38849;
state_38849 = G__38860;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38849){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_38858 = f__5709__auto__.call(null);(statearr_38858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38858;
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
figwheel.client.reload_css_file = (function reload_css_file(p__38861){var map__38863 = p__38861;var map__38863__$1 = ((cljs.core.seq_QMARK_.call(null,map__38863))?cljs.core.apply.call(null,cljs.core.hash_map,map__38863):map__38863);var f_data = map__38863__$1;var request_url = cljs.core.get.call(null,map__38863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__38864,files_msg){var map__38886 = p__38864;var map__38886__$1 = ((cljs.core.seq_QMARK_.call(null,map__38886))?cljs.core.apply.call(null,cljs.core.hash_map,map__38886):map__38886);var opts = map__38886__$1;var on_cssload = cljs.core.get.call(null,map__38886__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__38887_38907 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__38888_38908 = null;var count__38889_38909 = (0);var i__38890_38910 = (0);while(true){
if((i__38890_38910 < count__38889_38909))
{var f_38911 = cljs.core._nth.call(null,chunk__38888_38908,i__38890_38910);figwheel.client.reload_css_file.call(null,f_38911);
{
var G__38912 = seq__38887_38907;
var G__38913 = chunk__38888_38908;
var G__38914 = count__38889_38909;
var G__38915 = (i__38890_38910 + (1));
seq__38887_38907 = G__38912;
chunk__38888_38908 = G__38913;
count__38889_38909 = G__38914;
i__38890_38910 = G__38915;
continue;
}
} else
{var temp__4126__auto___38916 = cljs.core.seq.call(null,seq__38887_38907);if(temp__4126__auto___38916)
{var seq__38887_38917__$1 = temp__4126__auto___38916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38887_38917__$1))
{var c__4314__auto___38918 = cljs.core.chunk_first.call(null,seq__38887_38917__$1);{
var G__38919 = cljs.core.chunk_rest.call(null,seq__38887_38917__$1);
var G__38920 = c__4314__auto___38918;
var G__38921 = cljs.core.count.call(null,c__4314__auto___38918);
var G__38922 = (0);
seq__38887_38907 = G__38919;
chunk__38888_38908 = G__38920;
count__38889_38909 = G__38921;
i__38890_38910 = G__38922;
continue;
}
} else
{var f_38923 = cljs.core.first.call(null,seq__38887_38917__$1);figwheel.client.reload_css_file.call(null,f_38923);
{
var G__38924 = cljs.core.next.call(null,seq__38887_38917__$1);
var G__38925 = null;
var G__38926 = (0);
var G__38927 = (0);
seq__38887_38907 = G__38924;
chunk__38888_38908 = G__38925;
count__38889_38909 = G__38926;
i__38890_38910 = G__38927;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__38886,map__38886__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__38886,map__38886__$1,opts,on_cssload){
return (function (state_38897){var state_val_38898 = (state_38897[(1)]);if((state_val_38898 === (2)))
{var inst_38893 = (state_38897[(2)]);var inst_38894 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_38895 = on_cssload.call(null,inst_38894);var state_38897__$1 = (function (){var statearr_38899 = state_38897;(statearr_38899[(7)] = inst_38893);
return statearr_38899;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38897__$1,inst_38895);
} else
{if((state_val_38898 === (1)))
{var inst_38891 = cljs.core.async.timeout.call(null,(100));var state_38897__$1 = state_38897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38897__$1,(2),inst_38891);
} else
{return null;
}
}
});})(c__5708__auto__,map__38886,map__38886__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__38886,map__38886__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38903 = [null,null,null,null,null,null,null,null];(statearr_38903[(0)] = state_machine__5694__auto__);
(statearr_38903[(1)] = (1));
return statearr_38903;
});
var state_machine__5694__auto____1 = (function (state_38897){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38904){if((e38904 instanceof Object))
{var ex__5697__auto__ = e38904;var statearr_38905_38928 = state_38897;(statearr_38905_38928[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38897);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38929 = state_38897;
state_38897 = G__38929;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38897){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__38886,map__38886__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_38906 = f__5709__auto__.call(null);(statearr_38906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__38886,map__38886__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__38930){var map__38935 = p__38930;var map__38935__$1 = ((cljs.core.seq_QMARK_.call(null,map__38935))?cljs.core.apply.call(null,cljs.core.hash_map,map__38935):map__38935);var opts = map__38935__$1;var on_compile_fail = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__38936 = cljs.core._EQ_;var expr__38937 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__38936.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__38937)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38936.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__38937)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38936.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38937)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__38935,map__38935__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj38942 = {"detail":url};return obj38942;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__38943){var map__38945 = p__38943;var map__38945__$1 = ((cljs.core.seq_QMARK_.call(null,map__38945))?cljs.core.apply.call(null,cljs.core.hash_map,map__38945):map__38945);var class$ = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__38946){var map__38952 = p__38946;var map__38952__$1 = ((cljs.core.seq_QMARK_.call(null,map__38952))?cljs.core.apply.call(null,cljs.core.hash_map,map__38952):map__38952);var ed = map__38952__$1;var exception_data = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__38953_38957 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__38954_38958 = null;var count__38955_38959 = (0);var i__38956_38960 = (0);while(true){
if((i__38956_38960 < count__38955_38959))
{var msg_38961 = cljs.core._nth.call(null,chunk__38954_38958,i__38956_38960);console.log(msg_38961);
{
var G__38962 = seq__38953_38957;
var G__38963 = chunk__38954_38958;
var G__38964 = count__38955_38959;
var G__38965 = (i__38956_38960 + (1));
seq__38953_38957 = G__38962;
chunk__38954_38958 = G__38963;
count__38955_38959 = G__38964;
i__38956_38960 = G__38965;
continue;
}
} else
{var temp__4126__auto___38966 = cljs.core.seq.call(null,seq__38953_38957);if(temp__4126__auto___38966)
{var seq__38953_38967__$1 = temp__4126__auto___38966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38953_38967__$1))
{var c__4314__auto___38968 = cljs.core.chunk_first.call(null,seq__38953_38967__$1);{
var G__38969 = cljs.core.chunk_rest.call(null,seq__38953_38967__$1);
var G__38970 = c__4314__auto___38968;
var G__38971 = cljs.core.count.call(null,c__4314__auto___38968);
var G__38972 = (0);
seq__38953_38957 = G__38969;
chunk__38954_38958 = G__38970;
count__38955_38959 = G__38971;
i__38956_38960 = G__38972;
continue;
}
} else
{var msg_38973 = cljs.core.first.call(null,seq__38953_38967__$1);console.log(msg_38973);
{
var G__38974 = cljs.core.next.call(null,seq__38953_38967__$1);
var G__38975 = null;
var G__38976 = (0);
var G__38977 = (0);
seq__38953_38957 = G__38974;
chunk__38954_38958 = G__38975;
count__38955_38959 = G__38976;
i__38956_38960 = G__38977;
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
var watch_and_reload__delegate = function (p__38978){var map__38980 = p__38978;var map__38980__$1 = ((cljs.core.seq_QMARK_.call(null,map__38980))?cljs.core.apply.call(null,cljs.core.hash_map,map__38980):map__38980);var opts = map__38980__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__38978 = null;if (arguments.length > 0) {
  p__38978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__38978);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__38981){
var p__38978 = cljs.core.seq(arglist__38981);
return watch_and_reload__delegate(p__38978);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
