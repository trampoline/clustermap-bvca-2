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
var opt_wrapper_27351 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27352 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27353 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$222,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27352,table_section_wrapper_27352,opt_wrapper_27351,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27353,table_section_wrapper_27352,cell_wrapper_27353,opt_wrapper_27351,table_section_wrapper_27352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27352]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27358 = cljs.core.seq(tbody);var chunk__27359 = null;var count__27360 = 0;var i__27361 = 0;while(true){
if((i__27361 < count__27360))
{var child = chunk__27359.cljs$core$IIndexed$_nth$arity$2(null,i__27361);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27362 = seq__27358;
var G__27363 = chunk__27359;
var G__27364 = count__27360;
var G__27365 = (i__27361 + 1);
seq__27358 = G__27362;
chunk__27359 = G__27363;
count__27360 = G__27364;
i__27361 = G__27365;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27358);if(temp__4092__auto__)
{var seq__27358__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27358__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27358__$1);{
var G__27366 = cljs.core.chunk_rest(seq__27358__$1);
var G__27367 = c__4148__auto__;
var G__27368 = cljs.core.count(c__4148__auto__);
var G__27369 = 0;
seq__27358 = G__27366;
chunk__27359 = G__27367;
count__27360 = G__27368;
i__27361 = G__27369;
continue;
}
} else
{var child = cljs.core.first(seq__27358__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27370 = cljs.core.next(seq__27358__$1);
var G__27371 = null;
var G__27372 = 0;
var G__27373 = 0;
seq__27358 = G__27370;
chunk__27359 = G__27371;
count__27360 = G__27372;
i__27361 = G__27373;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27375 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27375,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27375,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27375,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27376 = wrapper.lastChild;
var G__27377 = (level - 1);
wrapper = G__27376;
level = G__27377;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj27379 = {};return obj27379;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__27380){
var mesg = cljs.core.seq(arglist__27380);
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
log.cljs$lang$applyTo = (function (arglist__27381){
var mesg = cljs.core.seq(arglist__27381);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27382){
var contents = cljs.core.seq(arglist__27382);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27383_SHARP_){return p1__27383_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27384_SHARP_,p2__27385_SHARP_){return goog.dom.insertChildAt(p1__27384_SHARP_,p2__27385_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27384_SHARP_,p2__27385_SHARP_){return goog.dom.insertChildAt(p1__27384_SHARP_,p2__27385_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27387_SHARP_,p2__27386_SHARP_){return goog.dom.insertSiblingBefore(p2__27386_SHARP_,p1__27387_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27387_SHARP_,p2__27386_SHARP_){return goog.dom.insertSiblingBefore(p2__27386_SHARP_,p1__27387_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27389_SHARP_,p2__27388_SHARP_){return goog.dom.insertSiblingAfter(p2__27388_SHARP_,p1__27389_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27389_SHARP_,p2__27388_SHARP_){return goog.dom.insertSiblingAfter(p2__27388_SHARP_,p1__27389_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27391_SHARP_,p2__27390_SHARP_){return goog.dom.replaceNode(p2__27390_SHARP_,p1__27391_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27391_SHARP_,p2__27390_SHARP_){return goog.dom.replaceNode(p2__27390_SHARP_,p1__27391_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27396_27400 = cljs.core.seq(domina.nodes(content));var chunk__27397_27401 = null;var count__27398_27402 = 0;var i__27399_27403 = 0;while(true){
if((i__27399_27403 < count__27398_27402))
{var n_27404 = chunk__27397_27401.cljs$core$IIndexed$_nth$arity$2(null,i__27399_27403);goog.style.setStyle(n_27404,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27405 = seq__27396_27400;
var G__27406 = chunk__27397_27401;
var G__27407 = count__27398_27402;
var G__27408 = (i__27399_27403 + 1);
seq__27396_27400 = G__27405;
chunk__27397_27401 = G__27406;
count__27398_27402 = G__27407;
i__27399_27403 = G__27408;
continue;
}
} else
{var temp__4092__auto___27409 = cljs.core.seq(seq__27396_27400);if(temp__4092__auto___27409)
{var seq__27396_27410__$1 = temp__4092__auto___27409;if(cljs.core.chunked_seq_QMARK_(seq__27396_27410__$1))
{var c__4148__auto___27411 = cljs.core.chunk_first(seq__27396_27410__$1);{
var G__27412 = cljs.core.chunk_rest(seq__27396_27410__$1);
var G__27413 = c__4148__auto___27411;
var G__27414 = cljs.core.count(c__4148__auto___27411);
var G__27415 = 0;
seq__27396_27400 = G__27412;
chunk__27397_27401 = G__27413;
count__27398_27402 = G__27414;
i__27399_27403 = G__27415;
continue;
}
} else
{var n_27416 = cljs.core.first(seq__27396_27410__$1);goog.style.setStyle(n_27416,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27417 = cljs.core.next(seq__27396_27410__$1);
var G__27418 = null;
var G__27419 = 0;
var G__27420 = 0;
seq__27396_27400 = G__27417;
chunk__27397_27401 = G__27418;
count__27398_27402 = G__27419;
i__27399_27403 = G__27420;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27421){
var content = cljs.core.first(arglist__27421);
arglist__27421 = cljs.core.next(arglist__27421);
var name = cljs.core.first(arglist__27421);
var value = cljs.core.rest(arglist__27421);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27426_27430 = cljs.core.seq(domina.nodes(content));var chunk__27427_27431 = null;var count__27428_27432 = 0;var i__27429_27433 = 0;while(true){
if((i__27429_27433 < count__27428_27432))
{var n_27434 = chunk__27427_27431.cljs$core$IIndexed$_nth$arity$2(null,i__27429_27433);n_27434.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27435 = seq__27426_27430;
var G__27436 = chunk__27427_27431;
var G__27437 = count__27428_27432;
var G__27438 = (i__27429_27433 + 1);
seq__27426_27430 = G__27435;
chunk__27427_27431 = G__27436;
count__27428_27432 = G__27437;
i__27429_27433 = G__27438;
continue;
}
} else
{var temp__4092__auto___27439 = cljs.core.seq(seq__27426_27430);if(temp__4092__auto___27439)
{var seq__27426_27440__$1 = temp__4092__auto___27439;if(cljs.core.chunked_seq_QMARK_(seq__27426_27440__$1))
{var c__4148__auto___27441 = cljs.core.chunk_first(seq__27426_27440__$1);{
var G__27442 = cljs.core.chunk_rest(seq__27426_27440__$1);
var G__27443 = c__4148__auto___27441;
var G__27444 = cljs.core.count(c__4148__auto___27441);
var G__27445 = 0;
seq__27426_27430 = G__27442;
chunk__27427_27431 = G__27443;
count__27428_27432 = G__27444;
i__27429_27433 = G__27445;
continue;
}
} else
{var n_27446 = cljs.core.first(seq__27426_27440__$1);n_27446.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27447 = cljs.core.next(seq__27426_27440__$1);
var G__27448 = null;
var G__27449 = 0;
var G__27450 = 0;
seq__27426_27430 = G__27447;
chunk__27427_27431 = G__27448;
count__27428_27432 = G__27449;
i__27429_27433 = G__27450;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27451){
var content = cljs.core.first(arglist__27451);
arglist__27451 = cljs.core.next(arglist__27451);
var name = cljs.core.first(arglist__27451);
var value = cljs.core.rest(arglist__27451);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27456_27460 = cljs.core.seq(domina.nodes(content));var chunk__27457_27461 = null;var count__27458_27462 = 0;var i__27459_27463 = 0;while(true){
if((i__27459_27463 < count__27458_27462))
{var n_27464 = chunk__27457_27461.cljs$core$IIndexed$_nth$arity$2(null,i__27459_27463);n_27464.removeAttribute(cljs.core.name(name));
{
var G__27465 = seq__27456_27460;
var G__27466 = chunk__27457_27461;
var G__27467 = count__27458_27462;
var G__27468 = (i__27459_27463 + 1);
seq__27456_27460 = G__27465;
chunk__27457_27461 = G__27466;
count__27458_27462 = G__27467;
i__27459_27463 = G__27468;
continue;
}
} else
{var temp__4092__auto___27469 = cljs.core.seq(seq__27456_27460);if(temp__4092__auto___27469)
{var seq__27456_27470__$1 = temp__4092__auto___27469;if(cljs.core.chunked_seq_QMARK_(seq__27456_27470__$1))
{var c__4148__auto___27471 = cljs.core.chunk_first(seq__27456_27470__$1);{
var G__27472 = cljs.core.chunk_rest(seq__27456_27470__$1);
var G__27473 = c__4148__auto___27471;
var G__27474 = cljs.core.count(c__4148__auto___27471);
var G__27475 = 0;
seq__27456_27460 = G__27472;
chunk__27457_27461 = G__27473;
count__27458_27462 = G__27474;
i__27459_27463 = G__27475;
continue;
}
} else
{var n_27476 = cljs.core.first(seq__27456_27470__$1);n_27476.removeAttribute(cljs.core.name(name));
{
var G__27477 = cljs.core.next(seq__27456_27470__$1);
var G__27478 = null;
var G__27479 = 0;
var G__27480 = 0;
seq__27456_27460 = G__27477;
chunk__27457_27461 = G__27478;
count__27458_27462 = G__27479;
i__27459_27463 = G__27480;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27482 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27482,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27482,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(cljs.core.constant$keyword$221)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27483_SHARP_){var attr = attrs__$1.item(p1__27483_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27490_27496 = cljs.core.seq(styles);var chunk__27491_27497 = null;var count__27492_27498 = 0;var i__27493_27499 = 0;while(true){
if((i__27493_27499 < count__27492_27498))
{var vec__27494_27500 = chunk__27491_27497.cljs$core$IIndexed$_nth$arity$2(null,i__27493_27499);var name_27501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494_27500,0,null);var value_27502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494_27500,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27501,cljs.core.array_seq([value_27502], 0));
{
var G__27503 = seq__27490_27496;
var G__27504 = chunk__27491_27497;
var G__27505 = count__27492_27498;
var G__27506 = (i__27493_27499 + 1);
seq__27490_27496 = G__27503;
chunk__27491_27497 = G__27504;
count__27492_27498 = G__27505;
i__27493_27499 = G__27506;
continue;
}
} else
{var temp__4092__auto___27507 = cljs.core.seq(seq__27490_27496);if(temp__4092__auto___27507)
{var seq__27490_27508__$1 = temp__4092__auto___27507;if(cljs.core.chunked_seq_QMARK_(seq__27490_27508__$1))
{var c__4148__auto___27509 = cljs.core.chunk_first(seq__27490_27508__$1);{
var G__27510 = cljs.core.chunk_rest(seq__27490_27508__$1);
var G__27511 = c__4148__auto___27509;
var G__27512 = cljs.core.count(c__4148__auto___27509);
var G__27513 = 0;
seq__27490_27496 = G__27510;
chunk__27491_27497 = G__27511;
count__27492_27498 = G__27512;
i__27493_27499 = G__27513;
continue;
}
} else
{var vec__27495_27514 = cljs.core.first(seq__27490_27508__$1);var name_27515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27495_27514,0,null);var value_27516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27495_27514,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27515,cljs.core.array_seq([value_27516], 0));
{
var G__27517 = cljs.core.next(seq__27490_27508__$1);
var G__27518 = null;
var G__27519 = 0;
var G__27520 = 0;
seq__27490_27496 = G__27517;
chunk__27491_27497 = G__27518;
count__27492_27498 = G__27519;
i__27493_27499 = G__27520;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27527_27533 = cljs.core.seq(attrs);var chunk__27528_27534 = null;var count__27529_27535 = 0;var i__27530_27536 = 0;while(true){
if((i__27530_27536 < count__27529_27535))
{var vec__27531_27537 = chunk__27528_27534.cljs$core$IIndexed$_nth$arity$2(null,i__27530_27536);var name_27538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531_27537,0,null);var value_27539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531_27537,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27538,cljs.core.array_seq([value_27539], 0));
{
var G__27540 = seq__27527_27533;
var G__27541 = chunk__27528_27534;
var G__27542 = count__27529_27535;
var G__27543 = (i__27530_27536 + 1);
seq__27527_27533 = G__27540;
chunk__27528_27534 = G__27541;
count__27529_27535 = G__27542;
i__27530_27536 = G__27543;
continue;
}
} else
{var temp__4092__auto___27544 = cljs.core.seq(seq__27527_27533);if(temp__4092__auto___27544)
{var seq__27527_27545__$1 = temp__4092__auto___27544;if(cljs.core.chunked_seq_QMARK_(seq__27527_27545__$1))
{var c__4148__auto___27546 = cljs.core.chunk_first(seq__27527_27545__$1);{
var G__27547 = cljs.core.chunk_rest(seq__27527_27545__$1);
var G__27548 = c__4148__auto___27546;
var G__27549 = cljs.core.count(c__4148__auto___27546);
var G__27550 = 0;
seq__27527_27533 = G__27547;
chunk__27528_27534 = G__27548;
count__27529_27535 = G__27549;
i__27530_27536 = G__27550;
continue;
}
} else
{var vec__27532_27551 = cljs.core.first(seq__27527_27545__$1);var name_27552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27532_27551,0,null);var value_27553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27532_27551,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27552,cljs.core.array_seq([value_27553], 0));
{
var G__27554 = cljs.core.next(seq__27527_27545__$1);
var G__27555 = null;
var G__27556 = 0;
var G__27557 = 0;
seq__27527_27533 = G__27554;
chunk__27528_27534 = G__27555;
count__27529_27535 = G__27556;
i__27530_27536 = G__27557;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27562_27566 = cljs.core.seq(domina.nodes(content));var chunk__27563_27567 = null;var count__27564_27568 = 0;var i__27565_27569 = 0;while(true){
if((i__27565_27569 < count__27564_27568))
{var node_27570 = chunk__27563_27567.cljs$core$IIndexed$_nth$arity$2(null,i__27565_27569);goog.dom.classes.add(node_27570,class$);
{
var G__27571 = seq__27562_27566;
var G__27572 = chunk__27563_27567;
var G__27573 = count__27564_27568;
var G__27574 = (i__27565_27569 + 1);
seq__27562_27566 = G__27571;
chunk__27563_27567 = G__27572;
count__27564_27568 = G__27573;
i__27565_27569 = G__27574;
continue;
}
} else
{var temp__4092__auto___27575 = cljs.core.seq(seq__27562_27566);if(temp__4092__auto___27575)
{var seq__27562_27576__$1 = temp__4092__auto___27575;if(cljs.core.chunked_seq_QMARK_(seq__27562_27576__$1))
{var c__4148__auto___27577 = cljs.core.chunk_first(seq__27562_27576__$1);{
var G__27578 = cljs.core.chunk_rest(seq__27562_27576__$1);
var G__27579 = c__4148__auto___27577;
var G__27580 = cljs.core.count(c__4148__auto___27577);
var G__27581 = 0;
seq__27562_27566 = G__27578;
chunk__27563_27567 = G__27579;
count__27564_27568 = G__27580;
i__27565_27569 = G__27581;
continue;
}
} else
{var node_27582 = cljs.core.first(seq__27562_27576__$1);goog.dom.classes.add(node_27582,class$);
{
var G__27583 = cljs.core.next(seq__27562_27576__$1);
var G__27584 = null;
var G__27585 = 0;
var G__27586 = 0;
seq__27562_27566 = G__27583;
chunk__27563_27567 = G__27584;
count__27564_27568 = G__27585;
i__27565_27569 = G__27586;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27591_27595 = cljs.core.seq(domina.nodes(content));var chunk__27592_27596 = null;var count__27593_27597 = 0;var i__27594_27598 = 0;while(true){
if((i__27594_27598 < count__27593_27597))
{var node_27599 = chunk__27592_27596.cljs$core$IIndexed$_nth$arity$2(null,i__27594_27598);goog.dom.classes.remove(node_27599,class$);
{
var G__27600 = seq__27591_27595;
var G__27601 = chunk__27592_27596;
var G__27602 = count__27593_27597;
var G__27603 = (i__27594_27598 + 1);
seq__27591_27595 = G__27600;
chunk__27592_27596 = G__27601;
count__27593_27597 = G__27602;
i__27594_27598 = G__27603;
continue;
}
} else
{var temp__4092__auto___27604 = cljs.core.seq(seq__27591_27595);if(temp__4092__auto___27604)
{var seq__27591_27605__$1 = temp__4092__auto___27604;if(cljs.core.chunked_seq_QMARK_(seq__27591_27605__$1))
{var c__4148__auto___27606 = cljs.core.chunk_first(seq__27591_27605__$1);{
var G__27607 = cljs.core.chunk_rest(seq__27591_27605__$1);
var G__27608 = c__4148__auto___27606;
var G__27609 = cljs.core.count(c__4148__auto___27606);
var G__27610 = 0;
seq__27591_27595 = G__27607;
chunk__27592_27596 = G__27608;
count__27593_27597 = G__27609;
i__27594_27598 = G__27610;
continue;
}
} else
{var node_27611 = cljs.core.first(seq__27591_27605__$1);goog.dom.classes.remove(node_27611,class$);
{
var G__27612 = cljs.core.next(seq__27591_27605__$1);
var G__27613 = null;
var G__27614 = 0;
var G__27615 = 0;
seq__27591_27595 = G__27612;
chunk__27592_27596 = G__27613;
count__27593_27597 = G__27614;
i__27594_27598 = G__27615;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27620_27624 = cljs.core.seq(domina.nodes(content));var chunk__27621_27625 = null;var count__27622_27626 = 0;var i__27623_27627 = 0;while(true){
if((i__27623_27627 < count__27622_27626))
{var node_27628 = chunk__27621_27625.cljs$core$IIndexed$_nth$arity$2(null,i__27623_27627);goog.dom.classes.toggle(node_27628,class$);
{
var G__27629 = seq__27620_27624;
var G__27630 = chunk__27621_27625;
var G__27631 = count__27622_27626;
var G__27632 = (i__27623_27627 + 1);
seq__27620_27624 = G__27629;
chunk__27621_27625 = G__27630;
count__27622_27626 = G__27631;
i__27623_27627 = G__27632;
continue;
}
} else
{var temp__4092__auto___27633 = cljs.core.seq(seq__27620_27624);if(temp__4092__auto___27633)
{var seq__27620_27634__$1 = temp__4092__auto___27633;if(cljs.core.chunked_seq_QMARK_(seq__27620_27634__$1))
{var c__4148__auto___27635 = cljs.core.chunk_first(seq__27620_27634__$1);{
var G__27636 = cljs.core.chunk_rest(seq__27620_27634__$1);
var G__27637 = c__4148__auto___27635;
var G__27638 = cljs.core.count(c__4148__auto___27635);
var G__27639 = 0;
seq__27620_27624 = G__27636;
chunk__27621_27625 = G__27637;
count__27622_27626 = G__27638;
i__27623_27627 = G__27639;
continue;
}
} else
{var node_27640 = cljs.core.first(seq__27620_27634__$1);goog.dom.classes.toggle(node_27640,class$);
{
var G__27641 = cljs.core.next(seq__27620_27634__$1);
var G__27642 = null;
var G__27643 = 0;
var G__27644 = 0;
seq__27620_27624 = G__27641;
chunk__27621_27625 = G__27642;
count__27622_27626 = G__27643;
i__27623_27627 = G__27644;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27653__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27649_27654 = cljs.core.seq(domina.nodes(content));var chunk__27650_27655 = null;var count__27651_27656 = 0;var i__27652_27657 = 0;while(true){
if((i__27652_27657 < count__27651_27656))
{var node_27658 = chunk__27650_27655.cljs$core$IIndexed$_nth$arity$2(null,i__27652_27657);goog.dom.classes.set(node_27658,classes_27653__$1);
{
var G__27659 = seq__27649_27654;
var G__27660 = chunk__27650_27655;
var G__27661 = count__27651_27656;
var G__27662 = (i__27652_27657 + 1);
seq__27649_27654 = G__27659;
chunk__27650_27655 = G__27660;
count__27651_27656 = G__27661;
i__27652_27657 = G__27662;
continue;
}
} else
{var temp__4092__auto___27663 = cljs.core.seq(seq__27649_27654);if(temp__4092__auto___27663)
{var seq__27649_27664__$1 = temp__4092__auto___27663;if(cljs.core.chunked_seq_QMARK_(seq__27649_27664__$1))
{var c__4148__auto___27665 = cljs.core.chunk_first(seq__27649_27664__$1);{
var G__27666 = cljs.core.chunk_rest(seq__27649_27664__$1);
var G__27667 = c__4148__auto___27665;
var G__27668 = cljs.core.count(c__4148__auto___27665);
var G__27669 = 0;
seq__27649_27654 = G__27666;
chunk__27650_27655 = G__27667;
count__27651_27656 = G__27668;
i__27652_27657 = G__27669;
continue;
}
} else
{var node_27670 = cljs.core.first(seq__27649_27664__$1);goog.dom.classes.set(node_27670,classes_27653__$1);
{
var G__27671 = cljs.core.next(seq__27649_27664__$1);
var G__27672 = null;
var G__27673 = 0;
var G__27674 = 0;
seq__27649_27654 = G__27671;
chunk__27650_27655 = G__27672;
count__27651_27656 = G__27673;
i__27652_27657 = G__27674;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27679_27683 = cljs.core.seq(domina.nodes(content));var chunk__27680_27684 = null;var count__27681_27685 = 0;var i__27682_27686 = 0;while(true){
if((i__27682_27686 < count__27681_27685))
{var node_27687 = chunk__27680_27684.cljs$core$IIndexed$_nth$arity$2(null,i__27682_27686);goog.dom.setTextContent(node_27687,value);
{
var G__27688 = seq__27679_27683;
var G__27689 = chunk__27680_27684;
var G__27690 = count__27681_27685;
var G__27691 = (i__27682_27686 + 1);
seq__27679_27683 = G__27688;
chunk__27680_27684 = G__27689;
count__27681_27685 = G__27690;
i__27682_27686 = G__27691;
continue;
}
} else
{var temp__4092__auto___27692 = cljs.core.seq(seq__27679_27683);if(temp__4092__auto___27692)
{var seq__27679_27693__$1 = temp__4092__auto___27692;if(cljs.core.chunked_seq_QMARK_(seq__27679_27693__$1))
{var c__4148__auto___27694 = cljs.core.chunk_first(seq__27679_27693__$1);{
var G__27695 = cljs.core.chunk_rest(seq__27679_27693__$1);
var G__27696 = c__4148__auto___27694;
var G__27697 = cljs.core.count(c__4148__auto___27694);
var G__27698 = 0;
seq__27679_27683 = G__27695;
chunk__27680_27684 = G__27696;
count__27681_27685 = G__27697;
i__27682_27686 = G__27698;
continue;
}
} else
{var node_27699 = cljs.core.first(seq__27679_27693__$1);goog.dom.setTextContent(node_27699,value);
{
var G__27700 = cljs.core.next(seq__27679_27693__$1);
var G__27701 = null;
var G__27702 = 0;
var G__27703 = 0;
seq__27679_27683 = G__27700;
chunk__27680_27684 = G__27701;
count__27681_27685 = G__27702;
i__27682_27686 = G__27703;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27708_27712 = cljs.core.seq(domina.nodes(content));var chunk__27709_27713 = null;var count__27710_27714 = 0;var i__27711_27715 = 0;while(true){
if((i__27711_27715 < count__27710_27714))
{var node_27716 = chunk__27709_27713.cljs$core$IIndexed$_nth$arity$2(null,i__27711_27715);goog.dom.forms.setValue(node_27716,value);
{
var G__27717 = seq__27708_27712;
var G__27718 = chunk__27709_27713;
var G__27719 = count__27710_27714;
var G__27720 = (i__27711_27715 + 1);
seq__27708_27712 = G__27717;
chunk__27709_27713 = G__27718;
count__27710_27714 = G__27719;
i__27711_27715 = G__27720;
continue;
}
} else
{var temp__4092__auto___27721 = cljs.core.seq(seq__27708_27712);if(temp__4092__auto___27721)
{var seq__27708_27722__$1 = temp__4092__auto___27721;if(cljs.core.chunked_seq_QMARK_(seq__27708_27722__$1))
{var c__4148__auto___27723 = cljs.core.chunk_first(seq__27708_27722__$1);{
var G__27724 = cljs.core.chunk_rest(seq__27708_27722__$1);
var G__27725 = c__4148__auto___27723;
var G__27726 = cljs.core.count(c__4148__auto___27723);
var G__27727 = 0;
seq__27708_27712 = G__27724;
chunk__27709_27713 = G__27725;
count__27710_27714 = G__27726;
i__27711_27715 = G__27727;
continue;
}
} else
{var node_27728 = cljs.core.first(seq__27708_27722__$1);goog.dom.forms.setValue(node_27728,value);
{
var G__27729 = cljs.core.next(seq__27708_27722__$1);
var G__27730 = null;
var G__27731 = 0;
var G__27732 = 0;
seq__27708_27712 = G__27729;
chunk__27709_27713 = G__27730;
count__27710_27714 = G__27731;
i__27711_27715 = G__27732;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_27743 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27739_27744 = cljs.core.seq(domina.nodes(content));var chunk__27740_27745 = null;var count__27741_27746 = 0;var i__27742_27747 = 0;while(true){
if((i__27742_27747 < count__27741_27746))
{var node_27748 = chunk__27740_27745.cljs$core$IIndexed$_nth$arity$2(null,i__27742_27747);node_27748.innerHTML = value_27743;
{
var G__27749 = seq__27739_27744;
var G__27750 = chunk__27740_27745;
var G__27751 = count__27741_27746;
var G__27752 = (i__27742_27747 + 1);
seq__27739_27744 = G__27749;
chunk__27740_27745 = G__27750;
count__27741_27746 = G__27751;
i__27742_27747 = G__27752;
continue;
}
} else
{var temp__4092__auto___27753 = cljs.core.seq(seq__27739_27744);if(temp__4092__auto___27753)
{var seq__27739_27754__$1 = temp__4092__auto___27753;if(cljs.core.chunked_seq_QMARK_(seq__27739_27754__$1))
{var c__4148__auto___27755 = cljs.core.chunk_first(seq__27739_27754__$1);{
var G__27756 = cljs.core.chunk_rest(seq__27739_27754__$1);
var G__27757 = c__4148__auto___27755;
var G__27758 = cljs.core.count(c__4148__auto___27755);
var G__27759 = 0;
seq__27739_27744 = G__27756;
chunk__27740_27745 = G__27757;
count__27741_27746 = G__27758;
i__27742_27747 = G__27759;
continue;
}
} else
{var node_27760 = cljs.core.first(seq__27739_27754__$1);node_27760.innerHTML = value_27743;
{
var G__27761 = cljs.core.next(seq__27739_27754__$1);
var G__27762 = null;
var G__27763 = 0;
var G__27764 = 0;
seq__27739_27744 = G__27761;
chunk__27740_27745 = G__27762;
count__27741_27746 = G__27763;
i__27742_27747 = G__27764;
continue;
}
}
} else
{}
}
break;
}
}catch (e27738){if((e27738 instanceof Error))
{var e_27765 = e27738;domina.replace_children_BANG_(content,value_27743);
} else
{if(cljs.core.constant$keyword$221)
{throw e27738;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27772_27776 = cljs.core.seq(children);var chunk__27773_27777 = null;var count__27774_27778 = 0;var i__27775_27779 = 0;while(true){
if((i__27775_27779 < count__27774_27778))
{var child_27780 = chunk__27773_27777.cljs$core$IIndexed$_nth$arity$2(null,i__27775_27779);frag.appendChild(child_27780);
{
var G__27781 = seq__27772_27776;
var G__27782 = chunk__27773_27777;
var G__27783 = count__27774_27778;
var G__27784 = (i__27775_27779 + 1);
seq__27772_27776 = G__27781;
chunk__27773_27777 = G__27782;
count__27774_27778 = G__27783;
i__27775_27779 = G__27784;
continue;
}
} else
{var temp__4092__auto___27785 = cljs.core.seq(seq__27772_27776);if(temp__4092__auto___27785)
{var seq__27772_27786__$1 = temp__4092__auto___27785;if(cljs.core.chunked_seq_QMARK_(seq__27772_27786__$1))
{var c__4148__auto___27787 = cljs.core.chunk_first(seq__27772_27786__$1);{
var G__27788 = cljs.core.chunk_rest(seq__27772_27786__$1);
var G__27789 = c__4148__auto___27787;
var G__27790 = cljs.core.count(c__4148__auto___27787);
var G__27791 = 0;
seq__27772_27776 = G__27788;
chunk__27773_27777 = G__27789;
count__27774_27778 = G__27790;
i__27775_27779 = G__27791;
continue;
}
} else
{var child_27792 = cljs.core.first(seq__27772_27786__$1);frag.appendChild(child_27792);
{
var G__27793 = cljs.core.next(seq__27772_27786__$1);
var G__27794 = null;
var G__27795 = 0;
var G__27796 = 0;
seq__27772_27776 = G__27793;
chunk__27773_27777 = G__27794;
count__27774_27778 = G__27795;
i__27775_27779 = G__27796;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27766_SHARP_,p2__27767_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27766_SHARP_,p2__27767_SHARP_) : f.call(null,p1__27766_SHARP_,p2__27767_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__27798 = list_thing;if(G__27798)
{var bit__4050__auto__ = (G__27798.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27798.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27798.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27798);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$222)
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
{if((function (){var G__27799 = content;if(G__27799)
{var bit__4050__auto__ = (G__27799.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27799.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27799.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27799);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27799);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$222)
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
{if((function (){var G__27800 = content;if(G__27800)
{var bit__4050__auto__ = (G__27800.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27800.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27800.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27800);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27800);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$222)
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
