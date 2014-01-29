// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_36219 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36220 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36221 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36220,table_section_wrapper_36220,opt_wrapper_36219,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36221,table_section_wrapper_36220,cell_wrapper_36221,opt_wrapper_36219,table_section_wrapper_36220,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36220]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36226 = cljs.core.seq.call(null,tbody);var chunk__36227 = null;var count__36228 = 0;var i__36229 = 0;while(true){
if((i__36229 < count__36228))
{var child = cljs.core._nth.call(null,chunk__36227,i__36229);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36230 = seq__36226;
var G__36231 = chunk__36227;
var G__36232 = count__36228;
var G__36233 = (i__36229 + 1);
seq__36226 = G__36230;
chunk__36227 = G__36231;
count__36228 = G__36232;
i__36229 = G__36233;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36226);if(temp__4092__auto__)
{var seq__36226__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36226__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36226__$1);{
var G__36234 = cljs.core.chunk_rest.call(null,seq__36226__$1);
var G__36235 = c__4148__auto__;
var G__36236 = cljs.core.count.call(null,c__4148__auto__);
var G__36237 = 0;
seq__36226 = G__36234;
chunk__36227 = G__36235;
count__36228 = G__36236;
i__36229 = G__36237;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36226__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36238 = cljs.core.next.call(null,seq__36226__$1);
var G__36239 = null;
var G__36240 = 0;
var G__36241 = 0;
seq__36226 = G__36238;
chunk__36227 = G__36239;
count__36228 = G__36240;
i__36229 = G__36241;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36243 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36243,0,null);var start_wrap = cljs.core.nth.call(null,vec__36243,1,null);var end_wrap = cljs.core.nth.call(null,vec__36243,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36244 = wrapper.lastChild;
var G__36245 = (level - 1);
wrapper = G__36244;
level = G__36245;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj36247 = {};return obj36247;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__36248){
var mesg = cljs.core.seq(arglist__36248);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__36249){
var mesg = cljs.core.seq(arglist__36249);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__36250){
var contents = cljs.core.seq(arglist__36250);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36251_SHARP_){return p1__36251_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36252_SHARP_,p2__36253_SHARP_){return goog.dom.insertChildAt(p1__36252_SHARP_,p2__36253_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36255_SHARP_,p2__36254_SHARP_){return goog.dom.insertSiblingBefore(p2__36254_SHARP_,p1__36255_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36257_SHARP_,p2__36256_SHARP_){return goog.dom.insertSiblingAfter(p2__36256_SHARP_,p1__36257_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36259_SHARP_,p2__36258_SHARP_){return goog.dom.replaceNode(p2__36258_SHARP_,p1__36259_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__36264_36268 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36265_36269 = null;var count__36266_36270 = 0;var i__36267_36271 = 0;while(true){
if((i__36267_36271 < count__36266_36270))
{var n_36272 = cljs.core._nth.call(null,chunk__36265_36269,i__36267_36271);goog.style.setStyle(n_36272,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36273 = seq__36264_36268;
var G__36274 = chunk__36265_36269;
var G__36275 = count__36266_36270;
var G__36276 = (i__36267_36271 + 1);
seq__36264_36268 = G__36273;
chunk__36265_36269 = G__36274;
count__36266_36270 = G__36275;
i__36267_36271 = G__36276;
continue;
}
} else
{var temp__4092__auto___36277 = cljs.core.seq.call(null,seq__36264_36268);if(temp__4092__auto___36277)
{var seq__36264_36278__$1 = temp__4092__auto___36277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36264_36278__$1))
{var c__4148__auto___36279 = cljs.core.chunk_first.call(null,seq__36264_36278__$1);{
var G__36280 = cljs.core.chunk_rest.call(null,seq__36264_36278__$1);
var G__36281 = c__4148__auto___36279;
var G__36282 = cljs.core.count.call(null,c__4148__auto___36279);
var G__36283 = 0;
seq__36264_36268 = G__36280;
chunk__36265_36269 = G__36281;
count__36266_36270 = G__36282;
i__36267_36271 = G__36283;
continue;
}
} else
{var n_36284 = cljs.core.first.call(null,seq__36264_36278__$1);goog.style.setStyle(n_36284,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36285 = cljs.core.next.call(null,seq__36264_36278__$1);
var G__36286 = null;
var G__36287 = 0;
var G__36288 = 0;
seq__36264_36268 = G__36285;
chunk__36265_36269 = G__36286;
count__36266_36270 = G__36287;
i__36267_36271 = G__36288;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36289){
var content = cljs.core.first(arglist__36289);
arglist__36289 = cljs.core.next(arglist__36289);
var name = cljs.core.first(arglist__36289);
var value = cljs.core.rest(arglist__36289);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__36294_36298 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36295_36299 = null;var count__36296_36300 = 0;var i__36297_36301 = 0;while(true){
if((i__36297_36301 < count__36296_36300))
{var n_36302 = cljs.core._nth.call(null,chunk__36295_36299,i__36297_36301);n_36302.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36303 = seq__36294_36298;
var G__36304 = chunk__36295_36299;
var G__36305 = count__36296_36300;
var G__36306 = (i__36297_36301 + 1);
seq__36294_36298 = G__36303;
chunk__36295_36299 = G__36304;
count__36296_36300 = G__36305;
i__36297_36301 = G__36306;
continue;
}
} else
{var temp__4092__auto___36307 = cljs.core.seq.call(null,seq__36294_36298);if(temp__4092__auto___36307)
{var seq__36294_36308__$1 = temp__4092__auto___36307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36294_36308__$1))
{var c__4148__auto___36309 = cljs.core.chunk_first.call(null,seq__36294_36308__$1);{
var G__36310 = cljs.core.chunk_rest.call(null,seq__36294_36308__$1);
var G__36311 = c__4148__auto___36309;
var G__36312 = cljs.core.count.call(null,c__4148__auto___36309);
var G__36313 = 0;
seq__36294_36298 = G__36310;
chunk__36295_36299 = G__36311;
count__36296_36300 = G__36312;
i__36297_36301 = G__36313;
continue;
}
} else
{var n_36314 = cljs.core.first.call(null,seq__36294_36308__$1);n_36314.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36315 = cljs.core.next.call(null,seq__36294_36308__$1);
var G__36316 = null;
var G__36317 = 0;
var G__36318 = 0;
seq__36294_36298 = G__36315;
chunk__36295_36299 = G__36316;
count__36296_36300 = G__36317;
i__36297_36301 = G__36318;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36319){
var content = cljs.core.first(arglist__36319);
arglist__36319 = cljs.core.next(arglist__36319);
var name = cljs.core.first(arglist__36319);
var value = cljs.core.rest(arglist__36319);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36324_36328 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36325_36329 = null;var count__36326_36330 = 0;var i__36327_36331 = 0;while(true){
if((i__36327_36331 < count__36326_36330))
{var n_36332 = cljs.core._nth.call(null,chunk__36325_36329,i__36327_36331);n_36332.removeAttribute(cljs.core.name.call(null,name));
{
var G__36333 = seq__36324_36328;
var G__36334 = chunk__36325_36329;
var G__36335 = count__36326_36330;
var G__36336 = (i__36327_36331 + 1);
seq__36324_36328 = G__36333;
chunk__36325_36329 = G__36334;
count__36326_36330 = G__36335;
i__36327_36331 = G__36336;
continue;
}
} else
{var temp__4092__auto___36337 = cljs.core.seq.call(null,seq__36324_36328);if(temp__4092__auto___36337)
{var seq__36324_36338__$1 = temp__4092__auto___36337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36324_36338__$1))
{var c__4148__auto___36339 = cljs.core.chunk_first.call(null,seq__36324_36338__$1);{
var G__36340 = cljs.core.chunk_rest.call(null,seq__36324_36338__$1);
var G__36341 = c__4148__auto___36339;
var G__36342 = cljs.core.count.call(null,c__4148__auto___36339);
var G__36343 = 0;
seq__36324_36328 = G__36340;
chunk__36325_36329 = G__36341;
count__36326_36330 = G__36342;
i__36327_36331 = G__36343;
continue;
}
} else
{var n_36344 = cljs.core.first.call(null,seq__36324_36338__$1);n_36344.removeAttribute(cljs.core.name.call(null,name));
{
var G__36345 = cljs.core.next.call(null,seq__36324_36338__$1);
var G__36346 = null;
var G__36347 = 0;
var G__36348 = 0;
seq__36324_36328 = G__36345;
chunk__36325_36329 = G__36346;
count__36326_36330 = G__36347;
i__36327_36331 = G__36348;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36350 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36350,0,null);var v = cljs.core.nth.call(null,vec__36350,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36351_SHARP_){var attr = attrs__$1.item(p1__36351_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36358_36364 = cljs.core.seq.call(null,styles);var chunk__36359_36365 = null;var count__36360_36366 = 0;var i__36361_36367 = 0;while(true){
if((i__36361_36367 < count__36360_36366))
{var vec__36362_36368 = cljs.core._nth.call(null,chunk__36359_36365,i__36361_36367);var name_36369 = cljs.core.nth.call(null,vec__36362_36368,0,null);var value_36370 = cljs.core.nth.call(null,vec__36362_36368,1,null);domina.set_style_BANG_.call(null,content,name_36369,value_36370);
{
var G__36371 = seq__36358_36364;
var G__36372 = chunk__36359_36365;
var G__36373 = count__36360_36366;
var G__36374 = (i__36361_36367 + 1);
seq__36358_36364 = G__36371;
chunk__36359_36365 = G__36372;
count__36360_36366 = G__36373;
i__36361_36367 = G__36374;
continue;
}
} else
{var temp__4092__auto___36375 = cljs.core.seq.call(null,seq__36358_36364);if(temp__4092__auto___36375)
{var seq__36358_36376__$1 = temp__4092__auto___36375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36358_36376__$1))
{var c__4148__auto___36377 = cljs.core.chunk_first.call(null,seq__36358_36376__$1);{
var G__36378 = cljs.core.chunk_rest.call(null,seq__36358_36376__$1);
var G__36379 = c__4148__auto___36377;
var G__36380 = cljs.core.count.call(null,c__4148__auto___36377);
var G__36381 = 0;
seq__36358_36364 = G__36378;
chunk__36359_36365 = G__36379;
count__36360_36366 = G__36380;
i__36361_36367 = G__36381;
continue;
}
} else
{var vec__36363_36382 = cljs.core.first.call(null,seq__36358_36376__$1);var name_36383 = cljs.core.nth.call(null,vec__36363_36382,0,null);var value_36384 = cljs.core.nth.call(null,vec__36363_36382,1,null);domina.set_style_BANG_.call(null,content,name_36383,value_36384);
{
var G__36385 = cljs.core.next.call(null,seq__36358_36376__$1);
var G__36386 = null;
var G__36387 = 0;
var G__36388 = 0;
seq__36358_36364 = G__36385;
chunk__36359_36365 = G__36386;
count__36360_36366 = G__36387;
i__36361_36367 = G__36388;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36395_36401 = cljs.core.seq.call(null,attrs);var chunk__36396_36402 = null;var count__36397_36403 = 0;var i__36398_36404 = 0;while(true){
if((i__36398_36404 < count__36397_36403))
{var vec__36399_36405 = cljs.core._nth.call(null,chunk__36396_36402,i__36398_36404);var name_36406 = cljs.core.nth.call(null,vec__36399_36405,0,null);var value_36407 = cljs.core.nth.call(null,vec__36399_36405,1,null);domina.set_attr_BANG_.call(null,content,name_36406,value_36407);
{
var G__36408 = seq__36395_36401;
var G__36409 = chunk__36396_36402;
var G__36410 = count__36397_36403;
var G__36411 = (i__36398_36404 + 1);
seq__36395_36401 = G__36408;
chunk__36396_36402 = G__36409;
count__36397_36403 = G__36410;
i__36398_36404 = G__36411;
continue;
}
} else
{var temp__4092__auto___36412 = cljs.core.seq.call(null,seq__36395_36401);if(temp__4092__auto___36412)
{var seq__36395_36413__$1 = temp__4092__auto___36412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36395_36413__$1))
{var c__4148__auto___36414 = cljs.core.chunk_first.call(null,seq__36395_36413__$1);{
var G__36415 = cljs.core.chunk_rest.call(null,seq__36395_36413__$1);
var G__36416 = c__4148__auto___36414;
var G__36417 = cljs.core.count.call(null,c__4148__auto___36414);
var G__36418 = 0;
seq__36395_36401 = G__36415;
chunk__36396_36402 = G__36416;
count__36397_36403 = G__36417;
i__36398_36404 = G__36418;
continue;
}
} else
{var vec__36400_36419 = cljs.core.first.call(null,seq__36395_36413__$1);var name_36420 = cljs.core.nth.call(null,vec__36400_36419,0,null);var value_36421 = cljs.core.nth.call(null,vec__36400_36419,1,null);domina.set_attr_BANG_.call(null,content,name_36420,value_36421);
{
var G__36422 = cljs.core.next.call(null,seq__36395_36413__$1);
var G__36423 = null;
var G__36424 = 0;
var G__36425 = 0;
seq__36395_36401 = G__36422;
chunk__36396_36402 = G__36423;
count__36397_36403 = G__36424;
i__36398_36404 = G__36425;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36430_36434 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36431_36435 = null;var count__36432_36436 = 0;var i__36433_36437 = 0;while(true){
if((i__36433_36437 < count__36432_36436))
{var node_36438 = cljs.core._nth.call(null,chunk__36431_36435,i__36433_36437);goog.dom.classes.add(node_36438,class$);
{
var G__36439 = seq__36430_36434;
var G__36440 = chunk__36431_36435;
var G__36441 = count__36432_36436;
var G__36442 = (i__36433_36437 + 1);
seq__36430_36434 = G__36439;
chunk__36431_36435 = G__36440;
count__36432_36436 = G__36441;
i__36433_36437 = G__36442;
continue;
}
} else
{var temp__4092__auto___36443 = cljs.core.seq.call(null,seq__36430_36434);if(temp__4092__auto___36443)
{var seq__36430_36444__$1 = temp__4092__auto___36443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36430_36444__$1))
{var c__4148__auto___36445 = cljs.core.chunk_first.call(null,seq__36430_36444__$1);{
var G__36446 = cljs.core.chunk_rest.call(null,seq__36430_36444__$1);
var G__36447 = c__4148__auto___36445;
var G__36448 = cljs.core.count.call(null,c__4148__auto___36445);
var G__36449 = 0;
seq__36430_36434 = G__36446;
chunk__36431_36435 = G__36447;
count__36432_36436 = G__36448;
i__36433_36437 = G__36449;
continue;
}
} else
{var node_36450 = cljs.core.first.call(null,seq__36430_36444__$1);goog.dom.classes.add(node_36450,class$);
{
var G__36451 = cljs.core.next.call(null,seq__36430_36444__$1);
var G__36452 = null;
var G__36453 = 0;
var G__36454 = 0;
seq__36430_36434 = G__36451;
chunk__36431_36435 = G__36452;
count__36432_36436 = G__36453;
i__36433_36437 = G__36454;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36459_36463 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36460_36464 = null;var count__36461_36465 = 0;var i__36462_36466 = 0;while(true){
if((i__36462_36466 < count__36461_36465))
{var node_36467 = cljs.core._nth.call(null,chunk__36460_36464,i__36462_36466);goog.dom.classes.remove(node_36467,class$);
{
var G__36468 = seq__36459_36463;
var G__36469 = chunk__36460_36464;
var G__36470 = count__36461_36465;
var G__36471 = (i__36462_36466 + 1);
seq__36459_36463 = G__36468;
chunk__36460_36464 = G__36469;
count__36461_36465 = G__36470;
i__36462_36466 = G__36471;
continue;
}
} else
{var temp__4092__auto___36472 = cljs.core.seq.call(null,seq__36459_36463);if(temp__4092__auto___36472)
{var seq__36459_36473__$1 = temp__4092__auto___36472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36459_36473__$1))
{var c__4148__auto___36474 = cljs.core.chunk_first.call(null,seq__36459_36473__$1);{
var G__36475 = cljs.core.chunk_rest.call(null,seq__36459_36473__$1);
var G__36476 = c__4148__auto___36474;
var G__36477 = cljs.core.count.call(null,c__4148__auto___36474);
var G__36478 = 0;
seq__36459_36463 = G__36475;
chunk__36460_36464 = G__36476;
count__36461_36465 = G__36477;
i__36462_36466 = G__36478;
continue;
}
} else
{var node_36479 = cljs.core.first.call(null,seq__36459_36473__$1);goog.dom.classes.remove(node_36479,class$);
{
var G__36480 = cljs.core.next.call(null,seq__36459_36473__$1);
var G__36481 = null;
var G__36482 = 0;
var G__36483 = 0;
seq__36459_36463 = G__36480;
chunk__36460_36464 = G__36481;
count__36461_36465 = G__36482;
i__36462_36466 = G__36483;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36488_36492 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36489_36493 = null;var count__36490_36494 = 0;var i__36491_36495 = 0;while(true){
if((i__36491_36495 < count__36490_36494))
{var node_36496 = cljs.core._nth.call(null,chunk__36489_36493,i__36491_36495);goog.dom.classes.toggle(node_36496,class$);
{
var G__36497 = seq__36488_36492;
var G__36498 = chunk__36489_36493;
var G__36499 = count__36490_36494;
var G__36500 = (i__36491_36495 + 1);
seq__36488_36492 = G__36497;
chunk__36489_36493 = G__36498;
count__36490_36494 = G__36499;
i__36491_36495 = G__36500;
continue;
}
} else
{var temp__4092__auto___36501 = cljs.core.seq.call(null,seq__36488_36492);if(temp__4092__auto___36501)
{var seq__36488_36502__$1 = temp__4092__auto___36501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36488_36502__$1))
{var c__4148__auto___36503 = cljs.core.chunk_first.call(null,seq__36488_36502__$1);{
var G__36504 = cljs.core.chunk_rest.call(null,seq__36488_36502__$1);
var G__36505 = c__4148__auto___36503;
var G__36506 = cljs.core.count.call(null,c__4148__auto___36503);
var G__36507 = 0;
seq__36488_36492 = G__36504;
chunk__36489_36493 = G__36505;
count__36490_36494 = G__36506;
i__36491_36495 = G__36507;
continue;
}
} else
{var node_36508 = cljs.core.first.call(null,seq__36488_36502__$1);goog.dom.classes.toggle(node_36508,class$);
{
var G__36509 = cljs.core.next.call(null,seq__36488_36502__$1);
var G__36510 = null;
var G__36511 = 0;
var G__36512 = 0;
seq__36488_36492 = G__36509;
chunk__36489_36493 = G__36510;
count__36490_36494 = G__36511;
i__36491_36495 = G__36512;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36521__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36517_36522 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36518_36523 = null;var count__36519_36524 = 0;var i__36520_36525 = 0;while(true){
if((i__36520_36525 < count__36519_36524))
{var node_36526 = cljs.core._nth.call(null,chunk__36518_36523,i__36520_36525);goog.dom.classes.set(node_36526,classes_36521__$1);
{
var G__36527 = seq__36517_36522;
var G__36528 = chunk__36518_36523;
var G__36529 = count__36519_36524;
var G__36530 = (i__36520_36525 + 1);
seq__36517_36522 = G__36527;
chunk__36518_36523 = G__36528;
count__36519_36524 = G__36529;
i__36520_36525 = G__36530;
continue;
}
} else
{var temp__4092__auto___36531 = cljs.core.seq.call(null,seq__36517_36522);if(temp__4092__auto___36531)
{var seq__36517_36532__$1 = temp__4092__auto___36531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36517_36532__$1))
{var c__4148__auto___36533 = cljs.core.chunk_first.call(null,seq__36517_36532__$1);{
var G__36534 = cljs.core.chunk_rest.call(null,seq__36517_36532__$1);
var G__36535 = c__4148__auto___36533;
var G__36536 = cljs.core.count.call(null,c__4148__auto___36533);
var G__36537 = 0;
seq__36517_36522 = G__36534;
chunk__36518_36523 = G__36535;
count__36519_36524 = G__36536;
i__36520_36525 = G__36537;
continue;
}
} else
{var node_36538 = cljs.core.first.call(null,seq__36517_36532__$1);goog.dom.classes.set(node_36538,classes_36521__$1);
{
var G__36539 = cljs.core.next.call(null,seq__36517_36532__$1);
var G__36540 = null;
var G__36541 = 0;
var G__36542 = 0;
seq__36517_36522 = G__36539;
chunk__36518_36523 = G__36540;
count__36519_36524 = G__36541;
i__36520_36525 = G__36542;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36547_36551 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36548_36552 = null;var count__36549_36553 = 0;var i__36550_36554 = 0;while(true){
if((i__36550_36554 < count__36549_36553))
{var node_36555 = cljs.core._nth.call(null,chunk__36548_36552,i__36550_36554);goog.dom.setTextContent(node_36555,value);
{
var G__36556 = seq__36547_36551;
var G__36557 = chunk__36548_36552;
var G__36558 = count__36549_36553;
var G__36559 = (i__36550_36554 + 1);
seq__36547_36551 = G__36556;
chunk__36548_36552 = G__36557;
count__36549_36553 = G__36558;
i__36550_36554 = G__36559;
continue;
}
} else
{var temp__4092__auto___36560 = cljs.core.seq.call(null,seq__36547_36551);if(temp__4092__auto___36560)
{var seq__36547_36561__$1 = temp__4092__auto___36560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36547_36561__$1))
{var c__4148__auto___36562 = cljs.core.chunk_first.call(null,seq__36547_36561__$1);{
var G__36563 = cljs.core.chunk_rest.call(null,seq__36547_36561__$1);
var G__36564 = c__4148__auto___36562;
var G__36565 = cljs.core.count.call(null,c__4148__auto___36562);
var G__36566 = 0;
seq__36547_36551 = G__36563;
chunk__36548_36552 = G__36564;
count__36549_36553 = G__36565;
i__36550_36554 = G__36566;
continue;
}
} else
{var node_36567 = cljs.core.first.call(null,seq__36547_36561__$1);goog.dom.setTextContent(node_36567,value);
{
var G__36568 = cljs.core.next.call(null,seq__36547_36561__$1);
var G__36569 = null;
var G__36570 = 0;
var G__36571 = 0;
seq__36547_36551 = G__36568;
chunk__36548_36552 = G__36569;
count__36549_36553 = G__36570;
i__36550_36554 = G__36571;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36576_36580 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36577_36581 = null;var count__36578_36582 = 0;var i__36579_36583 = 0;while(true){
if((i__36579_36583 < count__36578_36582))
{var node_36584 = cljs.core._nth.call(null,chunk__36577_36581,i__36579_36583);goog.dom.forms.setValue(node_36584,value);
{
var G__36585 = seq__36576_36580;
var G__36586 = chunk__36577_36581;
var G__36587 = count__36578_36582;
var G__36588 = (i__36579_36583 + 1);
seq__36576_36580 = G__36585;
chunk__36577_36581 = G__36586;
count__36578_36582 = G__36587;
i__36579_36583 = G__36588;
continue;
}
} else
{var temp__4092__auto___36589 = cljs.core.seq.call(null,seq__36576_36580);if(temp__4092__auto___36589)
{var seq__36576_36590__$1 = temp__4092__auto___36589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36576_36590__$1))
{var c__4148__auto___36591 = cljs.core.chunk_first.call(null,seq__36576_36590__$1);{
var G__36592 = cljs.core.chunk_rest.call(null,seq__36576_36590__$1);
var G__36593 = c__4148__auto___36591;
var G__36594 = cljs.core.count.call(null,c__4148__auto___36591);
var G__36595 = 0;
seq__36576_36580 = G__36592;
chunk__36577_36581 = G__36593;
count__36578_36582 = G__36594;
i__36579_36583 = G__36595;
continue;
}
} else
{var node_36596 = cljs.core.first.call(null,seq__36576_36590__$1);goog.dom.forms.setValue(node_36596,value);
{
var G__36597 = cljs.core.next.call(null,seq__36576_36590__$1);
var G__36598 = null;
var G__36599 = 0;
var G__36600 = 0;
seq__36576_36580 = G__36597;
chunk__36577_36581 = G__36598;
count__36578_36582 = G__36599;
i__36579_36583 = G__36600;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_36611 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36607_36612 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36608_36613 = null;var count__36609_36614 = 0;var i__36610_36615 = 0;while(true){
if((i__36610_36615 < count__36609_36614))
{var node_36616 = cljs.core._nth.call(null,chunk__36608_36613,i__36610_36615);node_36616.innerHTML = value_36611;
{
var G__36617 = seq__36607_36612;
var G__36618 = chunk__36608_36613;
var G__36619 = count__36609_36614;
var G__36620 = (i__36610_36615 + 1);
seq__36607_36612 = G__36617;
chunk__36608_36613 = G__36618;
count__36609_36614 = G__36619;
i__36610_36615 = G__36620;
continue;
}
} else
{var temp__4092__auto___36621 = cljs.core.seq.call(null,seq__36607_36612);if(temp__4092__auto___36621)
{var seq__36607_36622__$1 = temp__4092__auto___36621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36607_36622__$1))
{var c__4148__auto___36623 = cljs.core.chunk_first.call(null,seq__36607_36622__$1);{
var G__36624 = cljs.core.chunk_rest.call(null,seq__36607_36622__$1);
var G__36625 = c__4148__auto___36623;
var G__36626 = cljs.core.count.call(null,c__4148__auto___36623);
var G__36627 = 0;
seq__36607_36612 = G__36624;
chunk__36608_36613 = G__36625;
count__36609_36614 = G__36626;
i__36610_36615 = G__36627;
continue;
}
} else
{var node_36628 = cljs.core.first.call(null,seq__36607_36622__$1);node_36628.innerHTML = value_36611;
{
var G__36629 = cljs.core.next.call(null,seq__36607_36622__$1);
var G__36630 = null;
var G__36631 = 0;
var G__36632 = 0;
seq__36607_36612 = G__36629;
chunk__36608_36613 = G__36630;
count__36609_36614 = G__36631;
i__36610_36615 = G__36632;
continue;
}
}
} else
{}
}
break;
}
}catch (e36606){if((e36606 instanceof Error))
{var e_36633 = e36606;domina.replace_children_BANG_.call(null,content,value_36611);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36606;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36640_36644 = cljs.core.seq.call(null,children);var chunk__36641_36645 = null;var count__36642_36646 = 0;var i__36643_36647 = 0;while(true){
if((i__36643_36647 < count__36642_36646))
{var child_36648 = cljs.core._nth.call(null,chunk__36641_36645,i__36643_36647);frag.appendChild(child_36648);
{
var G__36649 = seq__36640_36644;
var G__36650 = chunk__36641_36645;
var G__36651 = count__36642_36646;
var G__36652 = (i__36643_36647 + 1);
seq__36640_36644 = G__36649;
chunk__36641_36645 = G__36650;
count__36642_36646 = G__36651;
i__36643_36647 = G__36652;
continue;
}
} else
{var temp__4092__auto___36653 = cljs.core.seq.call(null,seq__36640_36644);if(temp__4092__auto___36653)
{var seq__36640_36654__$1 = temp__4092__auto___36653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36640_36654__$1))
{var c__4148__auto___36655 = cljs.core.chunk_first.call(null,seq__36640_36654__$1);{
var G__36656 = cljs.core.chunk_rest.call(null,seq__36640_36654__$1);
var G__36657 = c__4148__auto___36655;
var G__36658 = cljs.core.count.call(null,c__4148__auto___36655);
var G__36659 = 0;
seq__36640_36644 = G__36656;
chunk__36641_36645 = G__36657;
count__36642_36646 = G__36658;
i__36643_36647 = G__36659;
continue;
}
} else
{var child_36660 = cljs.core.first.call(null,seq__36640_36654__$1);frag.appendChild(child_36660);
{
var G__36661 = cljs.core.next.call(null,seq__36640_36654__$1);
var G__36662 = null;
var G__36663 = 0;
var G__36664 = 0;
seq__36640_36644 = G__36661;
chunk__36641_36645 = G__36662;
count__36642_36646 = G__36663;
i__36643_36647 = G__36664;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36634_SHARP_,p2__36635_SHARP_){return f.call(null,p1__36634_SHARP_,p2__36635_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__36666 = list_thing;if(G__36666)
{var bit__4050__auto__ = (G__36666.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36666.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36666.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36666);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36666);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__36667 = content;if(G__36667)
{var bit__4050__auto__ = (G__36667.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36667.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36667.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36667);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36667);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__36668 = content;if(G__36668)
{var bit__4050__auto__ = (G__36668.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36668.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36668.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36668);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
