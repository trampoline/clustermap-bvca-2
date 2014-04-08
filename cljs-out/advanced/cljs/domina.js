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
var opt_wrapper_39287 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39288 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39289 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$545,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39288,table_section_wrapper_39288,opt_wrapper_39287,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39289,table_section_wrapper_39288,cell_wrapper_39289,opt_wrapper_39287,table_section_wrapper_39288,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39288]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39294 = cljs.core.seq(tbody);var chunk__39295 = null;var count__39296 = 0;var i__39297 = 0;while(true){
if((i__39297 < count__39296))
{var child = chunk__39295.cljs$core$IIndexed$_nth$arity$2(null,i__39297);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39298 = seq__39294;
var G__39299 = chunk__39295;
var G__39300 = count__39296;
var G__39301 = (i__39297 + 1);
seq__39294 = G__39298;
chunk__39295 = G__39299;
count__39296 = G__39300;
i__39297 = G__39301;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39294);if(temp__4092__auto__)
{var seq__39294__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39294__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39294__$1);{
var G__39302 = cljs.core.chunk_rest(seq__39294__$1);
var G__39303 = c__4189__auto__;
var G__39304 = cljs.core.count(c__4189__auto__);
var G__39305 = 0;
seq__39294 = G__39302;
chunk__39295 = G__39303;
count__39296 = G__39304;
i__39297 = G__39305;
continue;
}
} else
{var child = cljs.core.first(seq__39294__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39306 = cljs.core.next(seq__39294__$1);
var G__39307 = null;
var G__39308 = 0;
var G__39309 = 0;
seq__39294 = G__39306;
chunk__39295 = G__39307;
count__39296 = G__39308;
i__39297 = G__39309;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39311 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39311,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39311,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39311,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39312 = wrapper.lastChild;
var G__39313 = (level - 1);
wrapper = G__39312;
level = G__39313;
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
domina.DomContent = (function (){var obj39315 = {};return obj39315;
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
log_debug.cljs$lang$applyTo = (function (arglist__39316){
var mesg = cljs.core.seq(arglist__39316);
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
log.cljs$lang$applyTo = (function (arglist__39317){
var mesg = cljs.core.seq(arglist__39317);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39318){
var contents = cljs.core.seq(arglist__39318);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39319_SHARP_){return p1__39319_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39320_SHARP_,p2__39321_SHARP_){return goog.dom.insertChildAt(p1__39320_SHARP_,p2__39321_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39320_SHARP_,p2__39321_SHARP_){return goog.dom.insertChildAt(p1__39320_SHARP_,p2__39321_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39323_SHARP_,p2__39322_SHARP_){return goog.dom.insertSiblingBefore(p2__39322_SHARP_,p1__39323_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39323_SHARP_,p2__39322_SHARP_){return goog.dom.insertSiblingBefore(p2__39322_SHARP_,p1__39323_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39325_SHARP_,p2__39324_SHARP_){return goog.dom.insertSiblingAfter(p2__39324_SHARP_,p1__39325_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39325_SHARP_,p2__39324_SHARP_){return goog.dom.insertSiblingAfter(p2__39324_SHARP_,p1__39325_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39327_SHARP_,p2__39326_SHARP_){return goog.dom.replaceNode(p2__39326_SHARP_,p1__39327_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39327_SHARP_,p2__39326_SHARP_){return goog.dom.replaceNode(p2__39326_SHARP_,p1__39327_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39332_39336 = cljs.core.seq(domina.nodes(content));var chunk__39333_39337 = null;var count__39334_39338 = 0;var i__39335_39339 = 0;while(true){
if((i__39335_39339 < count__39334_39338))
{var n_39340 = chunk__39333_39337.cljs$core$IIndexed$_nth$arity$2(null,i__39335_39339);goog.style.setStyle(n_39340,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39341 = seq__39332_39336;
var G__39342 = chunk__39333_39337;
var G__39343 = count__39334_39338;
var G__39344 = (i__39335_39339 + 1);
seq__39332_39336 = G__39341;
chunk__39333_39337 = G__39342;
count__39334_39338 = G__39343;
i__39335_39339 = G__39344;
continue;
}
} else
{var temp__4092__auto___39345 = cljs.core.seq(seq__39332_39336);if(temp__4092__auto___39345)
{var seq__39332_39346__$1 = temp__4092__auto___39345;if(cljs.core.chunked_seq_QMARK_(seq__39332_39346__$1))
{var c__4189__auto___39347 = cljs.core.chunk_first(seq__39332_39346__$1);{
var G__39348 = cljs.core.chunk_rest(seq__39332_39346__$1);
var G__39349 = c__4189__auto___39347;
var G__39350 = cljs.core.count(c__4189__auto___39347);
var G__39351 = 0;
seq__39332_39336 = G__39348;
chunk__39333_39337 = G__39349;
count__39334_39338 = G__39350;
i__39335_39339 = G__39351;
continue;
}
} else
{var n_39352 = cljs.core.first(seq__39332_39346__$1);goog.style.setStyle(n_39352,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39353 = cljs.core.next(seq__39332_39346__$1);
var G__39354 = null;
var G__39355 = 0;
var G__39356 = 0;
seq__39332_39336 = G__39353;
chunk__39333_39337 = G__39354;
count__39334_39338 = G__39355;
i__39335_39339 = G__39356;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39357){
var content = cljs.core.first(arglist__39357);
arglist__39357 = cljs.core.next(arglist__39357);
var name = cljs.core.first(arglist__39357);
var value = cljs.core.rest(arglist__39357);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39362_39366 = cljs.core.seq(domina.nodes(content));var chunk__39363_39367 = null;var count__39364_39368 = 0;var i__39365_39369 = 0;while(true){
if((i__39365_39369 < count__39364_39368))
{var n_39370 = chunk__39363_39367.cljs$core$IIndexed$_nth$arity$2(null,i__39365_39369);n_39370.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39371 = seq__39362_39366;
var G__39372 = chunk__39363_39367;
var G__39373 = count__39364_39368;
var G__39374 = (i__39365_39369 + 1);
seq__39362_39366 = G__39371;
chunk__39363_39367 = G__39372;
count__39364_39368 = G__39373;
i__39365_39369 = G__39374;
continue;
}
} else
{var temp__4092__auto___39375 = cljs.core.seq(seq__39362_39366);if(temp__4092__auto___39375)
{var seq__39362_39376__$1 = temp__4092__auto___39375;if(cljs.core.chunked_seq_QMARK_(seq__39362_39376__$1))
{var c__4189__auto___39377 = cljs.core.chunk_first(seq__39362_39376__$1);{
var G__39378 = cljs.core.chunk_rest(seq__39362_39376__$1);
var G__39379 = c__4189__auto___39377;
var G__39380 = cljs.core.count(c__4189__auto___39377);
var G__39381 = 0;
seq__39362_39366 = G__39378;
chunk__39363_39367 = G__39379;
count__39364_39368 = G__39380;
i__39365_39369 = G__39381;
continue;
}
} else
{var n_39382 = cljs.core.first(seq__39362_39376__$1);n_39382.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39383 = cljs.core.next(seq__39362_39376__$1);
var G__39384 = null;
var G__39385 = 0;
var G__39386 = 0;
seq__39362_39366 = G__39383;
chunk__39363_39367 = G__39384;
count__39364_39368 = G__39385;
i__39365_39369 = G__39386;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39387){
var content = cljs.core.first(arglist__39387);
arglist__39387 = cljs.core.next(arglist__39387);
var name = cljs.core.first(arglist__39387);
var value = cljs.core.rest(arglist__39387);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39392_39396 = cljs.core.seq(domina.nodes(content));var chunk__39393_39397 = null;var count__39394_39398 = 0;var i__39395_39399 = 0;while(true){
if((i__39395_39399 < count__39394_39398))
{var n_39400 = chunk__39393_39397.cljs$core$IIndexed$_nth$arity$2(null,i__39395_39399);n_39400.removeAttribute(cljs.core.name(name));
{
var G__39401 = seq__39392_39396;
var G__39402 = chunk__39393_39397;
var G__39403 = count__39394_39398;
var G__39404 = (i__39395_39399 + 1);
seq__39392_39396 = G__39401;
chunk__39393_39397 = G__39402;
count__39394_39398 = G__39403;
i__39395_39399 = G__39404;
continue;
}
} else
{var temp__4092__auto___39405 = cljs.core.seq(seq__39392_39396);if(temp__4092__auto___39405)
{var seq__39392_39406__$1 = temp__4092__auto___39405;if(cljs.core.chunked_seq_QMARK_(seq__39392_39406__$1))
{var c__4189__auto___39407 = cljs.core.chunk_first(seq__39392_39406__$1);{
var G__39408 = cljs.core.chunk_rest(seq__39392_39406__$1);
var G__39409 = c__4189__auto___39407;
var G__39410 = cljs.core.count(c__4189__auto___39407);
var G__39411 = 0;
seq__39392_39396 = G__39408;
chunk__39393_39397 = G__39409;
count__39394_39398 = G__39410;
i__39395_39399 = G__39411;
continue;
}
} else
{var n_39412 = cljs.core.first(seq__39392_39406__$1);n_39412.removeAttribute(cljs.core.name(name));
{
var G__39413 = cljs.core.next(seq__39392_39406__$1);
var G__39414 = null;
var G__39415 = 0;
var G__39416 = 0;
seq__39392_39396 = G__39413;
chunk__39393_39397 = G__39414;
count__39394_39398 = G__39415;
i__39395_39399 = G__39416;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39418 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39418,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39418,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
{if(cljs.core.constant$keyword$544)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39419_SHARP_){var attr = attrs__$1.item(p1__39419_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39426_39432 = cljs.core.seq(styles);var chunk__39427_39433 = null;var count__39428_39434 = 0;var i__39429_39435 = 0;while(true){
if((i__39429_39435 < count__39428_39434))
{var vec__39430_39436 = chunk__39427_39433.cljs$core$IIndexed$_nth$arity$2(null,i__39429_39435);var name_39437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430_39436,0,null);var value_39438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430_39436,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39437,cljs.core.array_seq([value_39438], 0));
{
var G__39439 = seq__39426_39432;
var G__39440 = chunk__39427_39433;
var G__39441 = count__39428_39434;
var G__39442 = (i__39429_39435 + 1);
seq__39426_39432 = G__39439;
chunk__39427_39433 = G__39440;
count__39428_39434 = G__39441;
i__39429_39435 = G__39442;
continue;
}
} else
{var temp__4092__auto___39443 = cljs.core.seq(seq__39426_39432);if(temp__4092__auto___39443)
{var seq__39426_39444__$1 = temp__4092__auto___39443;if(cljs.core.chunked_seq_QMARK_(seq__39426_39444__$1))
{var c__4189__auto___39445 = cljs.core.chunk_first(seq__39426_39444__$1);{
var G__39446 = cljs.core.chunk_rest(seq__39426_39444__$1);
var G__39447 = c__4189__auto___39445;
var G__39448 = cljs.core.count(c__4189__auto___39445);
var G__39449 = 0;
seq__39426_39432 = G__39446;
chunk__39427_39433 = G__39447;
count__39428_39434 = G__39448;
i__39429_39435 = G__39449;
continue;
}
} else
{var vec__39431_39450 = cljs.core.first(seq__39426_39444__$1);var name_39451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39431_39450,0,null);var value_39452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39431_39450,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39451,cljs.core.array_seq([value_39452], 0));
{
var G__39453 = cljs.core.next(seq__39426_39444__$1);
var G__39454 = null;
var G__39455 = 0;
var G__39456 = 0;
seq__39426_39432 = G__39453;
chunk__39427_39433 = G__39454;
count__39428_39434 = G__39455;
i__39429_39435 = G__39456;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39463_39469 = cljs.core.seq(attrs);var chunk__39464_39470 = null;var count__39465_39471 = 0;var i__39466_39472 = 0;while(true){
if((i__39466_39472 < count__39465_39471))
{var vec__39467_39473 = chunk__39464_39470.cljs$core$IIndexed$_nth$arity$2(null,i__39466_39472);var name_39474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39467_39473,0,null);var value_39475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39467_39473,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39474,cljs.core.array_seq([value_39475], 0));
{
var G__39476 = seq__39463_39469;
var G__39477 = chunk__39464_39470;
var G__39478 = count__39465_39471;
var G__39479 = (i__39466_39472 + 1);
seq__39463_39469 = G__39476;
chunk__39464_39470 = G__39477;
count__39465_39471 = G__39478;
i__39466_39472 = G__39479;
continue;
}
} else
{var temp__4092__auto___39480 = cljs.core.seq(seq__39463_39469);if(temp__4092__auto___39480)
{var seq__39463_39481__$1 = temp__4092__auto___39480;if(cljs.core.chunked_seq_QMARK_(seq__39463_39481__$1))
{var c__4189__auto___39482 = cljs.core.chunk_first(seq__39463_39481__$1);{
var G__39483 = cljs.core.chunk_rest(seq__39463_39481__$1);
var G__39484 = c__4189__auto___39482;
var G__39485 = cljs.core.count(c__4189__auto___39482);
var G__39486 = 0;
seq__39463_39469 = G__39483;
chunk__39464_39470 = G__39484;
count__39465_39471 = G__39485;
i__39466_39472 = G__39486;
continue;
}
} else
{var vec__39468_39487 = cljs.core.first(seq__39463_39481__$1);var name_39488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39468_39487,0,null);var value_39489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39468_39487,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39488,cljs.core.array_seq([value_39489], 0));
{
var G__39490 = cljs.core.next(seq__39463_39481__$1);
var G__39491 = null;
var G__39492 = 0;
var G__39493 = 0;
seq__39463_39469 = G__39490;
chunk__39464_39470 = G__39491;
count__39465_39471 = G__39492;
i__39466_39472 = G__39493;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39498_39502 = cljs.core.seq(domina.nodes(content));var chunk__39499_39503 = null;var count__39500_39504 = 0;var i__39501_39505 = 0;while(true){
if((i__39501_39505 < count__39500_39504))
{var node_39506 = chunk__39499_39503.cljs$core$IIndexed$_nth$arity$2(null,i__39501_39505);goog.dom.classes.add(node_39506,class$);
{
var G__39507 = seq__39498_39502;
var G__39508 = chunk__39499_39503;
var G__39509 = count__39500_39504;
var G__39510 = (i__39501_39505 + 1);
seq__39498_39502 = G__39507;
chunk__39499_39503 = G__39508;
count__39500_39504 = G__39509;
i__39501_39505 = G__39510;
continue;
}
} else
{var temp__4092__auto___39511 = cljs.core.seq(seq__39498_39502);if(temp__4092__auto___39511)
{var seq__39498_39512__$1 = temp__4092__auto___39511;if(cljs.core.chunked_seq_QMARK_(seq__39498_39512__$1))
{var c__4189__auto___39513 = cljs.core.chunk_first(seq__39498_39512__$1);{
var G__39514 = cljs.core.chunk_rest(seq__39498_39512__$1);
var G__39515 = c__4189__auto___39513;
var G__39516 = cljs.core.count(c__4189__auto___39513);
var G__39517 = 0;
seq__39498_39502 = G__39514;
chunk__39499_39503 = G__39515;
count__39500_39504 = G__39516;
i__39501_39505 = G__39517;
continue;
}
} else
{var node_39518 = cljs.core.first(seq__39498_39512__$1);goog.dom.classes.add(node_39518,class$);
{
var G__39519 = cljs.core.next(seq__39498_39512__$1);
var G__39520 = null;
var G__39521 = 0;
var G__39522 = 0;
seq__39498_39502 = G__39519;
chunk__39499_39503 = G__39520;
count__39500_39504 = G__39521;
i__39501_39505 = G__39522;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39527_39531 = cljs.core.seq(domina.nodes(content));var chunk__39528_39532 = null;var count__39529_39533 = 0;var i__39530_39534 = 0;while(true){
if((i__39530_39534 < count__39529_39533))
{var node_39535 = chunk__39528_39532.cljs$core$IIndexed$_nth$arity$2(null,i__39530_39534);goog.dom.classes.remove(node_39535,class$);
{
var G__39536 = seq__39527_39531;
var G__39537 = chunk__39528_39532;
var G__39538 = count__39529_39533;
var G__39539 = (i__39530_39534 + 1);
seq__39527_39531 = G__39536;
chunk__39528_39532 = G__39537;
count__39529_39533 = G__39538;
i__39530_39534 = G__39539;
continue;
}
} else
{var temp__4092__auto___39540 = cljs.core.seq(seq__39527_39531);if(temp__4092__auto___39540)
{var seq__39527_39541__$1 = temp__4092__auto___39540;if(cljs.core.chunked_seq_QMARK_(seq__39527_39541__$1))
{var c__4189__auto___39542 = cljs.core.chunk_first(seq__39527_39541__$1);{
var G__39543 = cljs.core.chunk_rest(seq__39527_39541__$1);
var G__39544 = c__4189__auto___39542;
var G__39545 = cljs.core.count(c__4189__auto___39542);
var G__39546 = 0;
seq__39527_39531 = G__39543;
chunk__39528_39532 = G__39544;
count__39529_39533 = G__39545;
i__39530_39534 = G__39546;
continue;
}
} else
{var node_39547 = cljs.core.first(seq__39527_39541__$1);goog.dom.classes.remove(node_39547,class$);
{
var G__39548 = cljs.core.next(seq__39527_39541__$1);
var G__39549 = null;
var G__39550 = 0;
var G__39551 = 0;
seq__39527_39531 = G__39548;
chunk__39528_39532 = G__39549;
count__39529_39533 = G__39550;
i__39530_39534 = G__39551;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39556_39560 = cljs.core.seq(domina.nodes(content));var chunk__39557_39561 = null;var count__39558_39562 = 0;var i__39559_39563 = 0;while(true){
if((i__39559_39563 < count__39558_39562))
{var node_39564 = chunk__39557_39561.cljs$core$IIndexed$_nth$arity$2(null,i__39559_39563);goog.dom.classes.toggle(node_39564,class$);
{
var G__39565 = seq__39556_39560;
var G__39566 = chunk__39557_39561;
var G__39567 = count__39558_39562;
var G__39568 = (i__39559_39563 + 1);
seq__39556_39560 = G__39565;
chunk__39557_39561 = G__39566;
count__39558_39562 = G__39567;
i__39559_39563 = G__39568;
continue;
}
} else
{var temp__4092__auto___39569 = cljs.core.seq(seq__39556_39560);if(temp__4092__auto___39569)
{var seq__39556_39570__$1 = temp__4092__auto___39569;if(cljs.core.chunked_seq_QMARK_(seq__39556_39570__$1))
{var c__4189__auto___39571 = cljs.core.chunk_first(seq__39556_39570__$1);{
var G__39572 = cljs.core.chunk_rest(seq__39556_39570__$1);
var G__39573 = c__4189__auto___39571;
var G__39574 = cljs.core.count(c__4189__auto___39571);
var G__39575 = 0;
seq__39556_39560 = G__39572;
chunk__39557_39561 = G__39573;
count__39558_39562 = G__39574;
i__39559_39563 = G__39575;
continue;
}
} else
{var node_39576 = cljs.core.first(seq__39556_39570__$1);goog.dom.classes.toggle(node_39576,class$);
{
var G__39577 = cljs.core.next(seq__39556_39570__$1);
var G__39578 = null;
var G__39579 = 0;
var G__39580 = 0;
seq__39556_39560 = G__39577;
chunk__39557_39561 = G__39578;
count__39558_39562 = G__39579;
i__39559_39563 = G__39580;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39589__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39585_39590 = cljs.core.seq(domina.nodes(content));var chunk__39586_39591 = null;var count__39587_39592 = 0;var i__39588_39593 = 0;while(true){
if((i__39588_39593 < count__39587_39592))
{var node_39594 = chunk__39586_39591.cljs$core$IIndexed$_nth$arity$2(null,i__39588_39593);goog.dom.classes.set(node_39594,classes_39589__$1);
{
var G__39595 = seq__39585_39590;
var G__39596 = chunk__39586_39591;
var G__39597 = count__39587_39592;
var G__39598 = (i__39588_39593 + 1);
seq__39585_39590 = G__39595;
chunk__39586_39591 = G__39596;
count__39587_39592 = G__39597;
i__39588_39593 = G__39598;
continue;
}
} else
{var temp__4092__auto___39599 = cljs.core.seq(seq__39585_39590);if(temp__4092__auto___39599)
{var seq__39585_39600__$1 = temp__4092__auto___39599;if(cljs.core.chunked_seq_QMARK_(seq__39585_39600__$1))
{var c__4189__auto___39601 = cljs.core.chunk_first(seq__39585_39600__$1);{
var G__39602 = cljs.core.chunk_rest(seq__39585_39600__$1);
var G__39603 = c__4189__auto___39601;
var G__39604 = cljs.core.count(c__4189__auto___39601);
var G__39605 = 0;
seq__39585_39590 = G__39602;
chunk__39586_39591 = G__39603;
count__39587_39592 = G__39604;
i__39588_39593 = G__39605;
continue;
}
} else
{var node_39606 = cljs.core.first(seq__39585_39600__$1);goog.dom.classes.set(node_39606,classes_39589__$1);
{
var G__39607 = cljs.core.next(seq__39585_39600__$1);
var G__39608 = null;
var G__39609 = 0;
var G__39610 = 0;
seq__39585_39590 = G__39607;
chunk__39586_39591 = G__39608;
count__39587_39592 = G__39609;
i__39588_39593 = G__39610;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39615_39619 = cljs.core.seq(domina.nodes(content));var chunk__39616_39620 = null;var count__39617_39621 = 0;var i__39618_39622 = 0;while(true){
if((i__39618_39622 < count__39617_39621))
{var node_39623 = chunk__39616_39620.cljs$core$IIndexed$_nth$arity$2(null,i__39618_39622);goog.dom.setTextContent(node_39623,value);
{
var G__39624 = seq__39615_39619;
var G__39625 = chunk__39616_39620;
var G__39626 = count__39617_39621;
var G__39627 = (i__39618_39622 + 1);
seq__39615_39619 = G__39624;
chunk__39616_39620 = G__39625;
count__39617_39621 = G__39626;
i__39618_39622 = G__39627;
continue;
}
} else
{var temp__4092__auto___39628 = cljs.core.seq(seq__39615_39619);if(temp__4092__auto___39628)
{var seq__39615_39629__$1 = temp__4092__auto___39628;if(cljs.core.chunked_seq_QMARK_(seq__39615_39629__$1))
{var c__4189__auto___39630 = cljs.core.chunk_first(seq__39615_39629__$1);{
var G__39631 = cljs.core.chunk_rest(seq__39615_39629__$1);
var G__39632 = c__4189__auto___39630;
var G__39633 = cljs.core.count(c__4189__auto___39630);
var G__39634 = 0;
seq__39615_39619 = G__39631;
chunk__39616_39620 = G__39632;
count__39617_39621 = G__39633;
i__39618_39622 = G__39634;
continue;
}
} else
{var node_39635 = cljs.core.first(seq__39615_39629__$1);goog.dom.setTextContent(node_39635,value);
{
var G__39636 = cljs.core.next(seq__39615_39629__$1);
var G__39637 = null;
var G__39638 = 0;
var G__39639 = 0;
seq__39615_39619 = G__39636;
chunk__39616_39620 = G__39637;
count__39617_39621 = G__39638;
i__39618_39622 = G__39639;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39644_39648 = cljs.core.seq(domina.nodes(content));var chunk__39645_39649 = null;var count__39646_39650 = 0;var i__39647_39651 = 0;while(true){
if((i__39647_39651 < count__39646_39650))
{var node_39652 = chunk__39645_39649.cljs$core$IIndexed$_nth$arity$2(null,i__39647_39651);goog.dom.forms.setValue(node_39652,value);
{
var G__39653 = seq__39644_39648;
var G__39654 = chunk__39645_39649;
var G__39655 = count__39646_39650;
var G__39656 = (i__39647_39651 + 1);
seq__39644_39648 = G__39653;
chunk__39645_39649 = G__39654;
count__39646_39650 = G__39655;
i__39647_39651 = G__39656;
continue;
}
} else
{var temp__4092__auto___39657 = cljs.core.seq(seq__39644_39648);if(temp__4092__auto___39657)
{var seq__39644_39658__$1 = temp__4092__auto___39657;if(cljs.core.chunked_seq_QMARK_(seq__39644_39658__$1))
{var c__4189__auto___39659 = cljs.core.chunk_first(seq__39644_39658__$1);{
var G__39660 = cljs.core.chunk_rest(seq__39644_39658__$1);
var G__39661 = c__4189__auto___39659;
var G__39662 = cljs.core.count(c__4189__auto___39659);
var G__39663 = 0;
seq__39644_39648 = G__39660;
chunk__39645_39649 = G__39661;
count__39646_39650 = G__39662;
i__39647_39651 = G__39663;
continue;
}
} else
{var node_39664 = cljs.core.first(seq__39644_39658__$1);goog.dom.forms.setValue(node_39664,value);
{
var G__39665 = cljs.core.next(seq__39644_39658__$1);
var G__39666 = null;
var G__39667 = 0;
var G__39668 = 0;
seq__39644_39648 = G__39665;
chunk__39645_39649 = G__39666;
count__39646_39650 = G__39667;
i__39647_39651 = G__39668;
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
{var value_39679 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39675_39680 = cljs.core.seq(domina.nodes(content));var chunk__39676_39681 = null;var count__39677_39682 = 0;var i__39678_39683 = 0;while(true){
if((i__39678_39683 < count__39677_39682))
{var node_39684 = chunk__39676_39681.cljs$core$IIndexed$_nth$arity$2(null,i__39678_39683);node_39684.innerHTML = value_39679;
{
var G__39685 = seq__39675_39680;
var G__39686 = chunk__39676_39681;
var G__39687 = count__39677_39682;
var G__39688 = (i__39678_39683 + 1);
seq__39675_39680 = G__39685;
chunk__39676_39681 = G__39686;
count__39677_39682 = G__39687;
i__39678_39683 = G__39688;
continue;
}
} else
{var temp__4092__auto___39689 = cljs.core.seq(seq__39675_39680);if(temp__4092__auto___39689)
{var seq__39675_39690__$1 = temp__4092__auto___39689;if(cljs.core.chunked_seq_QMARK_(seq__39675_39690__$1))
{var c__4189__auto___39691 = cljs.core.chunk_first(seq__39675_39690__$1);{
var G__39692 = cljs.core.chunk_rest(seq__39675_39690__$1);
var G__39693 = c__4189__auto___39691;
var G__39694 = cljs.core.count(c__4189__auto___39691);
var G__39695 = 0;
seq__39675_39680 = G__39692;
chunk__39676_39681 = G__39693;
count__39677_39682 = G__39694;
i__39678_39683 = G__39695;
continue;
}
} else
{var node_39696 = cljs.core.first(seq__39675_39690__$1);node_39696.innerHTML = value_39679;
{
var G__39697 = cljs.core.next(seq__39675_39690__$1);
var G__39698 = null;
var G__39699 = 0;
var G__39700 = 0;
seq__39675_39680 = G__39697;
chunk__39676_39681 = G__39698;
count__39677_39682 = G__39699;
i__39678_39683 = G__39700;
continue;
}
}
} else
{}
}
break;
}
}catch (e39674){if((e39674 instanceof Error))
{var e_39701 = e39674;domina.replace_children_BANG_(content,value_39679);
} else
{if(cljs.core.constant$keyword$544)
{throw e39674;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39708_39712 = cljs.core.seq(children);var chunk__39709_39713 = null;var count__39710_39714 = 0;var i__39711_39715 = 0;while(true){
if((i__39711_39715 < count__39710_39714))
{var child_39716 = chunk__39709_39713.cljs$core$IIndexed$_nth$arity$2(null,i__39711_39715);frag.appendChild(child_39716);
{
var G__39717 = seq__39708_39712;
var G__39718 = chunk__39709_39713;
var G__39719 = count__39710_39714;
var G__39720 = (i__39711_39715 + 1);
seq__39708_39712 = G__39717;
chunk__39709_39713 = G__39718;
count__39710_39714 = G__39719;
i__39711_39715 = G__39720;
continue;
}
} else
{var temp__4092__auto___39721 = cljs.core.seq(seq__39708_39712);if(temp__4092__auto___39721)
{var seq__39708_39722__$1 = temp__4092__auto___39721;if(cljs.core.chunked_seq_QMARK_(seq__39708_39722__$1))
{var c__4189__auto___39723 = cljs.core.chunk_first(seq__39708_39722__$1);{
var G__39724 = cljs.core.chunk_rest(seq__39708_39722__$1);
var G__39725 = c__4189__auto___39723;
var G__39726 = cljs.core.count(c__4189__auto___39723);
var G__39727 = 0;
seq__39708_39712 = G__39724;
chunk__39709_39713 = G__39725;
count__39710_39714 = G__39726;
i__39711_39715 = G__39727;
continue;
}
} else
{var child_39728 = cljs.core.first(seq__39708_39722__$1);frag.appendChild(child_39728);
{
var G__39729 = cljs.core.next(seq__39708_39722__$1);
var G__39730 = null;
var G__39731 = 0;
var G__39732 = 0;
seq__39708_39712 = G__39729;
chunk__39709_39713 = G__39730;
count__39710_39714 = G__39731;
i__39711_39715 = G__39732;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39702_SHARP_,p2__39703_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39702_SHARP_,p2__39703_SHARP_) : f.call(null,p1__39702_SHARP_,p2__39703_SHARP_));
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
{if((function (){var G__39734 = list_thing;if(G__39734)
{var bit__4091__auto__ = (G__39734.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39734.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39734.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39734);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39734);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$545)
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
{if((function (){var G__39735 = content;if(G__39735)
{var bit__4091__auto__ = (G__39735.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39735.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39735.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39735);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$545)
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
{if((function (){var G__39736 = content;if(G__39736)
{var bit__4091__auto__ = (G__39736.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39736.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39736.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39736);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39736);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$545)
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
