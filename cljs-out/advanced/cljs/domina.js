// Compiled by ClojureScript 0.0-2173
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
var opt_wrapper_39263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39264 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39265 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$543,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39264,table_section_wrapper_39264,opt_wrapper_39263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39265,table_section_wrapper_39264,cell_wrapper_39265,opt_wrapper_39263,table_section_wrapper_39264,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39264]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39270 = cljs.core.seq(tbody);var chunk__39271 = null;var count__39272 = 0;var i__39273 = 0;while(true){
if((i__39273 < count__39272))
{var child = chunk__39271.cljs$core$IIndexed$_nth$arity$2(null,i__39273);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39274 = seq__39270;
var G__39275 = chunk__39271;
var G__39276 = count__39272;
var G__39277 = (i__39273 + 1);
seq__39270 = G__39274;
chunk__39271 = G__39275;
count__39272 = G__39276;
i__39273 = G__39277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39270);if(temp__4092__auto__)
{var seq__39270__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39270__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39270__$1);{
var G__39278 = cljs.core.chunk_rest(seq__39270__$1);
var G__39279 = c__4189__auto__;
var G__39280 = cljs.core.count(c__4189__auto__);
var G__39281 = 0;
seq__39270 = G__39278;
chunk__39271 = G__39279;
count__39272 = G__39280;
i__39273 = G__39281;
continue;
}
} else
{var child = cljs.core.first(seq__39270__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39282 = cljs.core.next(seq__39270__$1);
var G__39283 = null;
var G__39284 = 0;
var G__39285 = 0;
seq__39270 = G__39282;
chunk__39271 = G__39283;
count__39272 = G__39284;
i__39273 = G__39285;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39287 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$543.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39287,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39287,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39287,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39288 = wrapper.lastChild;
var G__39289 = (level - 1);
wrapper = G__39288;
level = G__39289;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj39291 = {};return obj39291;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__39292){
var mesg = cljs.core.seq(arglist__39292);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__39293){
var mesg = cljs.core.seq(arglist__39293);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__39294){
var contents = cljs.core.seq(arglist__39294);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39295_SHARP_){return p1__39295_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39296_SHARP_,p2__39297_SHARP_){return goog.dom.insertChildAt(p1__39296_SHARP_,p2__39297_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39296_SHARP_,p2__39297_SHARP_){return goog.dom.insertChildAt(p1__39296_SHARP_,p2__39297_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39299_SHARP_,p2__39298_SHARP_){return goog.dom.insertSiblingBefore(p2__39298_SHARP_,p1__39299_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39299_SHARP_,p2__39298_SHARP_){return goog.dom.insertSiblingBefore(p2__39298_SHARP_,p1__39299_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39301_SHARP_,p2__39300_SHARP_){return goog.dom.insertSiblingAfter(p2__39300_SHARP_,p1__39301_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39301_SHARP_,p2__39300_SHARP_){return goog.dom.insertSiblingAfter(p2__39300_SHARP_,p1__39301_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39303_SHARP_,p2__39302_SHARP_){return goog.dom.replaceNode(p2__39302_SHARP_,p1__39303_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39303_SHARP_,p2__39302_SHARP_){return goog.dom.replaceNode(p2__39302_SHARP_,p1__39303_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__39308_39312 = cljs.core.seq(domina.nodes(content));var chunk__39309_39313 = null;var count__39310_39314 = 0;var i__39311_39315 = 0;while(true){
if((i__39311_39315 < count__39310_39314))
{var n_39316 = chunk__39309_39313.cljs$core$IIndexed$_nth$arity$2(null,i__39311_39315);goog.style.setStyle(n_39316,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39317 = seq__39308_39312;
var G__39318 = chunk__39309_39313;
var G__39319 = count__39310_39314;
var G__39320 = (i__39311_39315 + 1);
seq__39308_39312 = G__39317;
chunk__39309_39313 = G__39318;
count__39310_39314 = G__39319;
i__39311_39315 = G__39320;
continue;
}
} else
{var temp__4092__auto___39321 = cljs.core.seq(seq__39308_39312);if(temp__4092__auto___39321)
{var seq__39308_39322__$1 = temp__4092__auto___39321;if(cljs.core.chunked_seq_QMARK_(seq__39308_39322__$1))
{var c__4189__auto___39323 = cljs.core.chunk_first(seq__39308_39322__$1);{
var G__39324 = cljs.core.chunk_rest(seq__39308_39322__$1);
var G__39325 = c__4189__auto___39323;
var G__39326 = cljs.core.count(c__4189__auto___39323);
var G__39327 = 0;
seq__39308_39312 = G__39324;
chunk__39309_39313 = G__39325;
count__39310_39314 = G__39326;
i__39311_39315 = G__39327;
continue;
}
} else
{var n_39328 = cljs.core.first(seq__39308_39322__$1);goog.style.setStyle(n_39328,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39329 = cljs.core.next(seq__39308_39322__$1);
var G__39330 = null;
var G__39331 = 0;
var G__39332 = 0;
seq__39308_39312 = G__39329;
chunk__39309_39313 = G__39330;
count__39310_39314 = G__39331;
i__39311_39315 = G__39332;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39333){
var content = cljs.core.first(arglist__39333);
arglist__39333 = cljs.core.next(arglist__39333);
var name = cljs.core.first(arglist__39333);
var value = cljs.core.rest(arglist__39333);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39338_39342 = cljs.core.seq(domina.nodes(content));var chunk__39339_39343 = null;var count__39340_39344 = 0;var i__39341_39345 = 0;while(true){
if((i__39341_39345 < count__39340_39344))
{var n_39346 = chunk__39339_39343.cljs$core$IIndexed$_nth$arity$2(null,i__39341_39345);n_39346.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39347 = seq__39338_39342;
var G__39348 = chunk__39339_39343;
var G__39349 = count__39340_39344;
var G__39350 = (i__39341_39345 + 1);
seq__39338_39342 = G__39347;
chunk__39339_39343 = G__39348;
count__39340_39344 = G__39349;
i__39341_39345 = G__39350;
continue;
}
} else
{var temp__4092__auto___39351 = cljs.core.seq(seq__39338_39342);if(temp__4092__auto___39351)
{var seq__39338_39352__$1 = temp__4092__auto___39351;if(cljs.core.chunked_seq_QMARK_(seq__39338_39352__$1))
{var c__4189__auto___39353 = cljs.core.chunk_first(seq__39338_39352__$1);{
var G__39354 = cljs.core.chunk_rest(seq__39338_39352__$1);
var G__39355 = c__4189__auto___39353;
var G__39356 = cljs.core.count(c__4189__auto___39353);
var G__39357 = 0;
seq__39338_39342 = G__39354;
chunk__39339_39343 = G__39355;
count__39340_39344 = G__39356;
i__39341_39345 = G__39357;
continue;
}
} else
{var n_39358 = cljs.core.first(seq__39338_39352__$1);n_39358.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39359 = cljs.core.next(seq__39338_39352__$1);
var G__39360 = null;
var G__39361 = 0;
var G__39362 = 0;
seq__39338_39342 = G__39359;
chunk__39339_39343 = G__39360;
count__39340_39344 = G__39361;
i__39341_39345 = G__39362;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39363){
var content = cljs.core.first(arglist__39363);
arglist__39363 = cljs.core.next(arglist__39363);
var name = cljs.core.first(arglist__39363);
var value = cljs.core.rest(arglist__39363);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39368_39372 = cljs.core.seq(domina.nodes(content));var chunk__39369_39373 = null;var count__39370_39374 = 0;var i__39371_39375 = 0;while(true){
if((i__39371_39375 < count__39370_39374))
{var n_39376 = chunk__39369_39373.cljs$core$IIndexed$_nth$arity$2(null,i__39371_39375);n_39376.removeAttribute(cljs.core.name(name));
{
var G__39377 = seq__39368_39372;
var G__39378 = chunk__39369_39373;
var G__39379 = count__39370_39374;
var G__39380 = (i__39371_39375 + 1);
seq__39368_39372 = G__39377;
chunk__39369_39373 = G__39378;
count__39370_39374 = G__39379;
i__39371_39375 = G__39380;
continue;
}
} else
{var temp__4092__auto___39381 = cljs.core.seq(seq__39368_39372);if(temp__4092__auto___39381)
{var seq__39368_39382__$1 = temp__4092__auto___39381;if(cljs.core.chunked_seq_QMARK_(seq__39368_39382__$1))
{var c__4189__auto___39383 = cljs.core.chunk_first(seq__39368_39382__$1);{
var G__39384 = cljs.core.chunk_rest(seq__39368_39382__$1);
var G__39385 = c__4189__auto___39383;
var G__39386 = cljs.core.count(c__4189__auto___39383);
var G__39387 = 0;
seq__39368_39372 = G__39384;
chunk__39369_39373 = G__39385;
count__39370_39374 = G__39386;
i__39371_39375 = G__39387;
continue;
}
} else
{var n_39388 = cljs.core.first(seq__39368_39382__$1);n_39388.removeAttribute(cljs.core.name(name));
{
var G__39389 = cljs.core.next(seq__39368_39382__$1);
var G__39390 = null;
var G__39391 = 0;
var G__39392 = 0;
seq__39368_39372 = G__39389;
chunk__39369_39373 = G__39390;
count__39370_39374 = G__39391;
i__39371_39375 = G__39392;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39394 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39394,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39394,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$542)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39395_SHARP_){var attr = attrs__$1.item(p1__39395_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39402_39408 = cljs.core.seq(styles);var chunk__39403_39409 = null;var count__39404_39410 = 0;var i__39405_39411 = 0;while(true){
if((i__39405_39411 < count__39404_39410))
{var vec__39406_39412 = chunk__39403_39409.cljs$core$IIndexed$_nth$arity$2(null,i__39405_39411);var name_39413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406_39412,0,null);var value_39414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406_39412,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39413,cljs.core.array_seq([value_39414], 0));
{
var G__39415 = seq__39402_39408;
var G__39416 = chunk__39403_39409;
var G__39417 = count__39404_39410;
var G__39418 = (i__39405_39411 + 1);
seq__39402_39408 = G__39415;
chunk__39403_39409 = G__39416;
count__39404_39410 = G__39417;
i__39405_39411 = G__39418;
continue;
}
} else
{var temp__4092__auto___39419 = cljs.core.seq(seq__39402_39408);if(temp__4092__auto___39419)
{var seq__39402_39420__$1 = temp__4092__auto___39419;if(cljs.core.chunked_seq_QMARK_(seq__39402_39420__$1))
{var c__4189__auto___39421 = cljs.core.chunk_first(seq__39402_39420__$1);{
var G__39422 = cljs.core.chunk_rest(seq__39402_39420__$1);
var G__39423 = c__4189__auto___39421;
var G__39424 = cljs.core.count(c__4189__auto___39421);
var G__39425 = 0;
seq__39402_39408 = G__39422;
chunk__39403_39409 = G__39423;
count__39404_39410 = G__39424;
i__39405_39411 = G__39425;
continue;
}
} else
{var vec__39407_39426 = cljs.core.first(seq__39402_39420__$1);var name_39427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407_39426,0,null);var value_39428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407_39426,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39427,cljs.core.array_seq([value_39428], 0));
{
var G__39429 = cljs.core.next(seq__39402_39420__$1);
var G__39430 = null;
var G__39431 = 0;
var G__39432 = 0;
seq__39402_39408 = G__39429;
chunk__39403_39409 = G__39430;
count__39404_39410 = G__39431;
i__39405_39411 = G__39432;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39439_39445 = cljs.core.seq(attrs);var chunk__39440_39446 = null;var count__39441_39447 = 0;var i__39442_39448 = 0;while(true){
if((i__39442_39448 < count__39441_39447))
{var vec__39443_39449 = chunk__39440_39446.cljs$core$IIndexed$_nth$arity$2(null,i__39442_39448);var name_39450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39443_39449,0,null);var value_39451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39443_39449,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39450,cljs.core.array_seq([value_39451], 0));
{
var G__39452 = seq__39439_39445;
var G__39453 = chunk__39440_39446;
var G__39454 = count__39441_39447;
var G__39455 = (i__39442_39448 + 1);
seq__39439_39445 = G__39452;
chunk__39440_39446 = G__39453;
count__39441_39447 = G__39454;
i__39442_39448 = G__39455;
continue;
}
} else
{var temp__4092__auto___39456 = cljs.core.seq(seq__39439_39445);if(temp__4092__auto___39456)
{var seq__39439_39457__$1 = temp__4092__auto___39456;if(cljs.core.chunked_seq_QMARK_(seq__39439_39457__$1))
{var c__4189__auto___39458 = cljs.core.chunk_first(seq__39439_39457__$1);{
var G__39459 = cljs.core.chunk_rest(seq__39439_39457__$1);
var G__39460 = c__4189__auto___39458;
var G__39461 = cljs.core.count(c__4189__auto___39458);
var G__39462 = 0;
seq__39439_39445 = G__39459;
chunk__39440_39446 = G__39460;
count__39441_39447 = G__39461;
i__39442_39448 = G__39462;
continue;
}
} else
{var vec__39444_39463 = cljs.core.first(seq__39439_39457__$1);var name_39464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39444_39463,0,null);var value_39465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39444_39463,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39464,cljs.core.array_seq([value_39465], 0));
{
var G__39466 = cljs.core.next(seq__39439_39457__$1);
var G__39467 = null;
var G__39468 = 0;
var G__39469 = 0;
seq__39439_39445 = G__39466;
chunk__39440_39446 = G__39467;
count__39441_39447 = G__39468;
i__39442_39448 = G__39469;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39474_39478 = cljs.core.seq(domina.nodes(content));var chunk__39475_39479 = null;var count__39476_39480 = 0;var i__39477_39481 = 0;while(true){
if((i__39477_39481 < count__39476_39480))
{var node_39482 = chunk__39475_39479.cljs$core$IIndexed$_nth$arity$2(null,i__39477_39481);goog.dom.classes.add(node_39482,class$);
{
var G__39483 = seq__39474_39478;
var G__39484 = chunk__39475_39479;
var G__39485 = count__39476_39480;
var G__39486 = (i__39477_39481 + 1);
seq__39474_39478 = G__39483;
chunk__39475_39479 = G__39484;
count__39476_39480 = G__39485;
i__39477_39481 = G__39486;
continue;
}
} else
{var temp__4092__auto___39487 = cljs.core.seq(seq__39474_39478);if(temp__4092__auto___39487)
{var seq__39474_39488__$1 = temp__4092__auto___39487;if(cljs.core.chunked_seq_QMARK_(seq__39474_39488__$1))
{var c__4189__auto___39489 = cljs.core.chunk_first(seq__39474_39488__$1);{
var G__39490 = cljs.core.chunk_rest(seq__39474_39488__$1);
var G__39491 = c__4189__auto___39489;
var G__39492 = cljs.core.count(c__4189__auto___39489);
var G__39493 = 0;
seq__39474_39478 = G__39490;
chunk__39475_39479 = G__39491;
count__39476_39480 = G__39492;
i__39477_39481 = G__39493;
continue;
}
} else
{var node_39494 = cljs.core.first(seq__39474_39488__$1);goog.dom.classes.add(node_39494,class$);
{
var G__39495 = cljs.core.next(seq__39474_39488__$1);
var G__39496 = null;
var G__39497 = 0;
var G__39498 = 0;
seq__39474_39478 = G__39495;
chunk__39475_39479 = G__39496;
count__39476_39480 = G__39497;
i__39477_39481 = G__39498;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39503_39507 = cljs.core.seq(domina.nodes(content));var chunk__39504_39508 = null;var count__39505_39509 = 0;var i__39506_39510 = 0;while(true){
if((i__39506_39510 < count__39505_39509))
{var node_39511 = chunk__39504_39508.cljs$core$IIndexed$_nth$arity$2(null,i__39506_39510);goog.dom.classes.remove(node_39511,class$);
{
var G__39512 = seq__39503_39507;
var G__39513 = chunk__39504_39508;
var G__39514 = count__39505_39509;
var G__39515 = (i__39506_39510 + 1);
seq__39503_39507 = G__39512;
chunk__39504_39508 = G__39513;
count__39505_39509 = G__39514;
i__39506_39510 = G__39515;
continue;
}
} else
{var temp__4092__auto___39516 = cljs.core.seq(seq__39503_39507);if(temp__4092__auto___39516)
{var seq__39503_39517__$1 = temp__4092__auto___39516;if(cljs.core.chunked_seq_QMARK_(seq__39503_39517__$1))
{var c__4189__auto___39518 = cljs.core.chunk_first(seq__39503_39517__$1);{
var G__39519 = cljs.core.chunk_rest(seq__39503_39517__$1);
var G__39520 = c__4189__auto___39518;
var G__39521 = cljs.core.count(c__4189__auto___39518);
var G__39522 = 0;
seq__39503_39507 = G__39519;
chunk__39504_39508 = G__39520;
count__39505_39509 = G__39521;
i__39506_39510 = G__39522;
continue;
}
} else
{var node_39523 = cljs.core.first(seq__39503_39517__$1);goog.dom.classes.remove(node_39523,class$);
{
var G__39524 = cljs.core.next(seq__39503_39517__$1);
var G__39525 = null;
var G__39526 = 0;
var G__39527 = 0;
seq__39503_39507 = G__39524;
chunk__39504_39508 = G__39525;
count__39505_39509 = G__39526;
i__39506_39510 = G__39527;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39532_39536 = cljs.core.seq(domina.nodes(content));var chunk__39533_39537 = null;var count__39534_39538 = 0;var i__39535_39539 = 0;while(true){
if((i__39535_39539 < count__39534_39538))
{var node_39540 = chunk__39533_39537.cljs$core$IIndexed$_nth$arity$2(null,i__39535_39539);goog.dom.classes.toggle(node_39540,class$);
{
var G__39541 = seq__39532_39536;
var G__39542 = chunk__39533_39537;
var G__39543 = count__39534_39538;
var G__39544 = (i__39535_39539 + 1);
seq__39532_39536 = G__39541;
chunk__39533_39537 = G__39542;
count__39534_39538 = G__39543;
i__39535_39539 = G__39544;
continue;
}
} else
{var temp__4092__auto___39545 = cljs.core.seq(seq__39532_39536);if(temp__4092__auto___39545)
{var seq__39532_39546__$1 = temp__4092__auto___39545;if(cljs.core.chunked_seq_QMARK_(seq__39532_39546__$1))
{var c__4189__auto___39547 = cljs.core.chunk_first(seq__39532_39546__$1);{
var G__39548 = cljs.core.chunk_rest(seq__39532_39546__$1);
var G__39549 = c__4189__auto___39547;
var G__39550 = cljs.core.count(c__4189__auto___39547);
var G__39551 = 0;
seq__39532_39536 = G__39548;
chunk__39533_39537 = G__39549;
count__39534_39538 = G__39550;
i__39535_39539 = G__39551;
continue;
}
} else
{var node_39552 = cljs.core.first(seq__39532_39546__$1);goog.dom.classes.toggle(node_39552,class$);
{
var G__39553 = cljs.core.next(seq__39532_39546__$1);
var G__39554 = null;
var G__39555 = 0;
var G__39556 = 0;
seq__39532_39536 = G__39553;
chunk__39533_39537 = G__39554;
count__39534_39538 = G__39555;
i__39535_39539 = G__39556;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39565__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39561_39566 = cljs.core.seq(domina.nodes(content));var chunk__39562_39567 = null;var count__39563_39568 = 0;var i__39564_39569 = 0;while(true){
if((i__39564_39569 < count__39563_39568))
{var node_39570 = chunk__39562_39567.cljs$core$IIndexed$_nth$arity$2(null,i__39564_39569);goog.dom.classes.set(node_39570,classes_39565__$1);
{
var G__39571 = seq__39561_39566;
var G__39572 = chunk__39562_39567;
var G__39573 = count__39563_39568;
var G__39574 = (i__39564_39569 + 1);
seq__39561_39566 = G__39571;
chunk__39562_39567 = G__39572;
count__39563_39568 = G__39573;
i__39564_39569 = G__39574;
continue;
}
} else
{var temp__4092__auto___39575 = cljs.core.seq(seq__39561_39566);if(temp__4092__auto___39575)
{var seq__39561_39576__$1 = temp__4092__auto___39575;if(cljs.core.chunked_seq_QMARK_(seq__39561_39576__$1))
{var c__4189__auto___39577 = cljs.core.chunk_first(seq__39561_39576__$1);{
var G__39578 = cljs.core.chunk_rest(seq__39561_39576__$1);
var G__39579 = c__4189__auto___39577;
var G__39580 = cljs.core.count(c__4189__auto___39577);
var G__39581 = 0;
seq__39561_39566 = G__39578;
chunk__39562_39567 = G__39579;
count__39563_39568 = G__39580;
i__39564_39569 = G__39581;
continue;
}
} else
{var node_39582 = cljs.core.first(seq__39561_39576__$1);goog.dom.classes.set(node_39582,classes_39565__$1);
{
var G__39583 = cljs.core.next(seq__39561_39576__$1);
var G__39584 = null;
var G__39585 = 0;
var G__39586 = 0;
seq__39561_39566 = G__39583;
chunk__39562_39567 = G__39584;
count__39563_39568 = G__39585;
i__39564_39569 = G__39586;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39591_39595 = cljs.core.seq(domina.nodes(content));var chunk__39592_39596 = null;var count__39593_39597 = 0;var i__39594_39598 = 0;while(true){
if((i__39594_39598 < count__39593_39597))
{var node_39599 = chunk__39592_39596.cljs$core$IIndexed$_nth$arity$2(null,i__39594_39598);goog.dom.setTextContent(node_39599,value);
{
var G__39600 = seq__39591_39595;
var G__39601 = chunk__39592_39596;
var G__39602 = count__39593_39597;
var G__39603 = (i__39594_39598 + 1);
seq__39591_39595 = G__39600;
chunk__39592_39596 = G__39601;
count__39593_39597 = G__39602;
i__39594_39598 = G__39603;
continue;
}
} else
{var temp__4092__auto___39604 = cljs.core.seq(seq__39591_39595);if(temp__4092__auto___39604)
{var seq__39591_39605__$1 = temp__4092__auto___39604;if(cljs.core.chunked_seq_QMARK_(seq__39591_39605__$1))
{var c__4189__auto___39606 = cljs.core.chunk_first(seq__39591_39605__$1);{
var G__39607 = cljs.core.chunk_rest(seq__39591_39605__$1);
var G__39608 = c__4189__auto___39606;
var G__39609 = cljs.core.count(c__4189__auto___39606);
var G__39610 = 0;
seq__39591_39595 = G__39607;
chunk__39592_39596 = G__39608;
count__39593_39597 = G__39609;
i__39594_39598 = G__39610;
continue;
}
} else
{var node_39611 = cljs.core.first(seq__39591_39605__$1);goog.dom.setTextContent(node_39611,value);
{
var G__39612 = cljs.core.next(seq__39591_39605__$1);
var G__39613 = null;
var G__39614 = 0;
var G__39615 = 0;
seq__39591_39595 = G__39612;
chunk__39592_39596 = G__39613;
count__39593_39597 = G__39614;
i__39594_39598 = G__39615;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39620_39624 = cljs.core.seq(domina.nodes(content));var chunk__39621_39625 = null;var count__39622_39626 = 0;var i__39623_39627 = 0;while(true){
if((i__39623_39627 < count__39622_39626))
{var node_39628 = chunk__39621_39625.cljs$core$IIndexed$_nth$arity$2(null,i__39623_39627);goog.dom.forms.setValue(node_39628,value);
{
var G__39629 = seq__39620_39624;
var G__39630 = chunk__39621_39625;
var G__39631 = count__39622_39626;
var G__39632 = (i__39623_39627 + 1);
seq__39620_39624 = G__39629;
chunk__39621_39625 = G__39630;
count__39622_39626 = G__39631;
i__39623_39627 = G__39632;
continue;
}
} else
{var temp__4092__auto___39633 = cljs.core.seq(seq__39620_39624);if(temp__4092__auto___39633)
{var seq__39620_39634__$1 = temp__4092__auto___39633;if(cljs.core.chunked_seq_QMARK_(seq__39620_39634__$1))
{var c__4189__auto___39635 = cljs.core.chunk_first(seq__39620_39634__$1);{
var G__39636 = cljs.core.chunk_rest(seq__39620_39634__$1);
var G__39637 = c__4189__auto___39635;
var G__39638 = cljs.core.count(c__4189__auto___39635);
var G__39639 = 0;
seq__39620_39624 = G__39636;
chunk__39621_39625 = G__39637;
count__39622_39626 = G__39638;
i__39623_39627 = G__39639;
continue;
}
} else
{var node_39640 = cljs.core.first(seq__39620_39634__$1);goog.dom.forms.setValue(node_39640,value);
{
var G__39641 = cljs.core.next(seq__39620_39634__$1);
var G__39642 = null;
var G__39643 = 0;
var G__39644 = 0;
seq__39620_39624 = G__39641;
chunk__39621_39625 = G__39642;
count__39622_39626 = G__39643;
i__39623_39627 = G__39644;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_39655 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39651_39656 = cljs.core.seq(domina.nodes(content));var chunk__39652_39657 = null;var count__39653_39658 = 0;var i__39654_39659 = 0;while(true){
if((i__39654_39659 < count__39653_39658))
{var node_39660 = chunk__39652_39657.cljs$core$IIndexed$_nth$arity$2(null,i__39654_39659);node_39660.innerHTML = value_39655;
{
var G__39661 = seq__39651_39656;
var G__39662 = chunk__39652_39657;
var G__39663 = count__39653_39658;
var G__39664 = (i__39654_39659 + 1);
seq__39651_39656 = G__39661;
chunk__39652_39657 = G__39662;
count__39653_39658 = G__39663;
i__39654_39659 = G__39664;
continue;
}
} else
{var temp__4092__auto___39665 = cljs.core.seq(seq__39651_39656);if(temp__4092__auto___39665)
{var seq__39651_39666__$1 = temp__4092__auto___39665;if(cljs.core.chunked_seq_QMARK_(seq__39651_39666__$1))
{var c__4189__auto___39667 = cljs.core.chunk_first(seq__39651_39666__$1);{
var G__39668 = cljs.core.chunk_rest(seq__39651_39666__$1);
var G__39669 = c__4189__auto___39667;
var G__39670 = cljs.core.count(c__4189__auto___39667);
var G__39671 = 0;
seq__39651_39656 = G__39668;
chunk__39652_39657 = G__39669;
count__39653_39658 = G__39670;
i__39654_39659 = G__39671;
continue;
}
} else
{var node_39672 = cljs.core.first(seq__39651_39666__$1);node_39672.innerHTML = value_39655;
{
var G__39673 = cljs.core.next(seq__39651_39666__$1);
var G__39674 = null;
var G__39675 = 0;
var G__39676 = 0;
seq__39651_39656 = G__39673;
chunk__39652_39657 = G__39674;
count__39653_39658 = G__39675;
i__39654_39659 = G__39676;
continue;
}
}
} else
{}
}
break;
}
}catch (e39650){if((e39650 instanceof Error))
{var e_39677 = e39650;domina.replace_children_BANG_(content,value_39655);
} else
{if(cljs.core.constant$keyword$542)
{throw e39650;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39684_39688 = cljs.core.seq(children);var chunk__39685_39689 = null;var count__39686_39690 = 0;var i__39687_39691 = 0;while(true){
if((i__39687_39691 < count__39686_39690))
{var child_39692 = chunk__39685_39689.cljs$core$IIndexed$_nth$arity$2(null,i__39687_39691);frag.appendChild(child_39692);
{
var G__39693 = seq__39684_39688;
var G__39694 = chunk__39685_39689;
var G__39695 = count__39686_39690;
var G__39696 = (i__39687_39691 + 1);
seq__39684_39688 = G__39693;
chunk__39685_39689 = G__39694;
count__39686_39690 = G__39695;
i__39687_39691 = G__39696;
continue;
}
} else
{var temp__4092__auto___39697 = cljs.core.seq(seq__39684_39688);if(temp__4092__auto___39697)
{var seq__39684_39698__$1 = temp__4092__auto___39697;if(cljs.core.chunked_seq_QMARK_(seq__39684_39698__$1))
{var c__4189__auto___39699 = cljs.core.chunk_first(seq__39684_39698__$1);{
var G__39700 = cljs.core.chunk_rest(seq__39684_39698__$1);
var G__39701 = c__4189__auto___39699;
var G__39702 = cljs.core.count(c__4189__auto___39699);
var G__39703 = 0;
seq__39684_39688 = G__39700;
chunk__39685_39689 = G__39701;
count__39686_39690 = G__39702;
i__39687_39691 = G__39703;
continue;
}
} else
{var child_39704 = cljs.core.first(seq__39684_39698__$1);frag.appendChild(child_39704);
{
var G__39705 = cljs.core.next(seq__39684_39698__$1);
var G__39706 = null;
var G__39707 = 0;
var G__39708 = 0;
seq__39684_39688 = G__39705;
chunk__39685_39689 = G__39706;
count__39686_39690 = G__39707;
i__39687_39691 = G__39708;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39678_SHARP_,p2__39679_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39678_SHARP_,p2__39679_SHARP_) : f.call(null,p1__39678_SHARP_,p2__39679_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not(obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__39710 = list_thing;if(G__39710)
{var bit__4091__auto__ = (G__39710.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39710.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39710.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39710);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$543)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__39711 = content;if(G__39711)
{var bit__4091__auto__ = (G__39711.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39711.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39711);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39711);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$543)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__39712 = content;if(G__39712)
{var bit__4091__auto__ = (G__39712.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39712.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39712.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39712);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$543)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
