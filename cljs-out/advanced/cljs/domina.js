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
var opt_wrapper_25423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_25424 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_25425 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$125,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_25424,table_section_wrapper_25424,opt_wrapper_25423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_25425,table_section_wrapper_25424,cell_wrapper_25425,opt_wrapper_25423,table_section_wrapper_25424,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_25424]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__25430 = cljs.core.seq(tbody);var chunk__25431 = null;var count__25432 = 0;var i__25433 = 0;while(true){
if((i__25433 < count__25432))
{var child = chunk__25431.cljs$core$IIndexed$_nth$arity$2(null,i__25433);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25434 = seq__25430;
var G__25435 = chunk__25431;
var G__25436 = count__25432;
var G__25437 = (i__25433 + 1);
seq__25430 = G__25434;
chunk__25431 = G__25435;
count__25432 = G__25436;
i__25433 = G__25437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25430);if(temp__4092__auto__)
{var seq__25430__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25430__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25430__$1);{
var G__25438 = cljs.core.chunk_rest(seq__25430__$1);
var G__25439 = c__4148__auto__;
var G__25440 = cljs.core.count(c__4148__auto__);
var G__25441 = 0;
seq__25430 = G__25438;
chunk__25431 = G__25439;
count__25432 = G__25440;
i__25433 = G__25441;
continue;
}
} else
{var child = cljs.core.first(seq__25430__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25442 = cljs.core.next(seq__25430__$1);
var G__25443 = null;
var G__25444 = 0;
var G__25445 = 0;
seq__25430 = G__25442;
chunk__25431 = G__25443;
count__25432 = G__25444;
i__25433 = G__25445;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__25447 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25447,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__25448 = wrapper.lastChild;
var G__25449 = (level - 1);
wrapper = G__25448;
level = G__25449;
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
domina.DomContent = (function (){var obj25451 = {};return obj25451;
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
log_debug.cljs$lang$applyTo = (function (arglist__25452){
var mesg = cljs.core.seq(arglist__25452);
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
log.cljs$lang$applyTo = (function (arglist__25453){
var mesg = cljs.core.seq(arglist__25453);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25454){
var contents = cljs.core.seq(arglist__25454);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25455_SHARP_){return p1__25455_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25456_SHARP_,p2__25457_SHARP_){return goog.dom.insertChildAt(p1__25456_SHARP_,p2__25457_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__25456_SHARP_,p2__25457_SHARP_){return goog.dom.insertChildAt(p1__25456_SHARP_,p2__25457_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25459_SHARP_,p2__25458_SHARP_){return goog.dom.insertSiblingBefore(p2__25458_SHARP_,p1__25459_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25459_SHARP_,p2__25458_SHARP_){return goog.dom.insertSiblingBefore(p2__25458_SHARP_,p1__25459_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25461_SHARP_,p2__25460_SHARP_){return goog.dom.insertSiblingAfter(p2__25460_SHARP_,p1__25461_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25461_SHARP_,p2__25460_SHARP_){return goog.dom.insertSiblingAfter(p2__25460_SHARP_,p1__25461_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25463_SHARP_,p2__25462_SHARP_){return goog.dom.replaceNode(p2__25462_SHARP_,p1__25463_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25463_SHARP_,p2__25462_SHARP_){return goog.dom.replaceNode(p2__25462_SHARP_,p1__25463_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25468_25472 = cljs.core.seq(domina.nodes(content));var chunk__25469_25473 = null;var count__25470_25474 = 0;var i__25471_25475 = 0;while(true){
if((i__25471_25475 < count__25470_25474))
{var n_25476 = chunk__25469_25473.cljs$core$IIndexed$_nth$arity$2(null,i__25471_25475);goog.style.setStyle(n_25476,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25477 = seq__25468_25472;
var G__25478 = chunk__25469_25473;
var G__25479 = count__25470_25474;
var G__25480 = (i__25471_25475 + 1);
seq__25468_25472 = G__25477;
chunk__25469_25473 = G__25478;
count__25470_25474 = G__25479;
i__25471_25475 = G__25480;
continue;
}
} else
{var temp__4092__auto___25481 = cljs.core.seq(seq__25468_25472);if(temp__4092__auto___25481)
{var seq__25468_25482__$1 = temp__4092__auto___25481;if(cljs.core.chunked_seq_QMARK_(seq__25468_25482__$1))
{var c__4148__auto___25483 = cljs.core.chunk_first(seq__25468_25482__$1);{
var G__25484 = cljs.core.chunk_rest(seq__25468_25482__$1);
var G__25485 = c__4148__auto___25483;
var G__25486 = cljs.core.count(c__4148__auto___25483);
var G__25487 = 0;
seq__25468_25472 = G__25484;
chunk__25469_25473 = G__25485;
count__25470_25474 = G__25486;
i__25471_25475 = G__25487;
continue;
}
} else
{var n_25488 = cljs.core.first(seq__25468_25482__$1);goog.style.setStyle(n_25488,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25489 = cljs.core.next(seq__25468_25482__$1);
var G__25490 = null;
var G__25491 = 0;
var G__25492 = 0;
seq__25468_25472 = G__25489;
chunk__25469_25473 = G__25490;
count__25470_25474 = G__25491;
i__25471_25475 = G__25492;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25493){
var content = cljs.core.first(arglist__25493);
arglist__25493 = cljs.core.next(arglist__25493);
var name = cljs.core.first(arglist__25493);
var value = cljs.core.rest(arglist__25493);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25498_25502 = cljs.core.seq(domina.nodes(content));var chunk__25499_25503 = null;var count__25500_25504 = 0;var i__25501_25505 = 0;while(true){
if((i__25501_25505 < count__25500_25504))
{var n_25506 = chunk__25499_25503.cljs$core$IIndexed$_nth$arity$2(null,i__25501_25505);n_25506.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25507 = seq__25498_25502;
var G__25508 = chunk__25499_25503;
var G__25509 = count__25500_25504;
var G__25510 = (i__25501_25505 + 1);
seq__25498_25502 = G__25507;
chunk__25499_25503 = G__25508;
count__25500_25504 = G__25509;
i__25501_25505 = G__25510;
continue;
}
} else
{var temp__4092__auto___25511 = cljs.core.seq(seq__25498_25502);if(temp__4092__auto___25511)
{var seq__25498_25512__$1 = temp__4092__auto___25511;if(cljs.core.chunked_seq_QMARK_(seq__25498_25512__$1))
{var c__4148__auto___25513 = cljs.core.chunk_first(seq__25498_25512__$1);{
var G__25514 = cljs.core.chunk_rest(seq__25498_25512__$1);
var G__25515 = c__4148__auto___25513;
var G__25516 = cljs.core.count(c__4148__auto___25513);
var G__25517 = 0;
seq__25498_25502 = G__25514;
chunk__25499_25503 = G__25515;
count__25500_25504 = G__25516;
i__25501_25505 = G__25517;
continue;
}
} else
{var n_25518 = cljs.core.first(seq__25498_25512__$1);n_25518.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25519 = cljs.core.next(seq__25498_25512__$1);
var G__25520 = null;
var G__25521 = 0;
var G__25522 = 0;
seq__25498_25502 = G__25519;
chunk__25499_25503 = G__25520;
count__25500_25504 = G__25521;
i__25501_25505 = G__25522;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25523){
var content = cljs.core.first(arglist__25523);
arglist__25523 = cljs.core.next(arglist__25523);
var name = cljs.core.first(arglist__25523);
var value = cljs.core.rest(arglist__25523);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25528_25532 = cljs.core.seq(domina.nodes(content));var chunk__25529_25533 = null;var count__25530_25534 = 0;var i__25531_25535 = 0;while(true){
if((i__25531_25535 < count__25530_25534))
{var n_25536 = chunk__25529_25533.cljs$core$IIndexed$_nth$arity$2(null,i__25531_25535);n_25536.removeAttribute(cljs.core.name(name));
{
var G__25537 = seq__25528_25532;
var G__25538 = chunk__25529_25533;
var G__25539 = count__25530_25534;
var G__25540 = (i__25531_25535 + 1);
seq__25528_25532 = G__25537;
chunk__25529_25533 = G__25538;
count__25530_25534 = G__25539;
i__25531_25535 = G__25540;
continue;
}
} else
{var temp__4092__auto___25541 = cljs.core.seq(seq__25528_25532);if(temp__4092__auto___25541)
{var seq__25528_25542__$1 = temp__4092__auto___25541;if(cljs.core.chunked_seq_QMARK_(seq__25528_25542__$1))
{var c__4148__auto___25543 = cljs.core.chunk_first(seq__25528_25542__$1);{
var G__25544 = cljs.core.chunk_rest(seq__25528_25542__$1);
var G__25545 = c__4148__auto___25543;
var G__25546 = cljs.core.count(c__4148__auto___25543);
var G__25547 = 0;
seq__25528_25532 = G__25544;
chunk__25529_25533 = G__25545;
count__25530_25534 = G__25546;
i__25531_25535 = G__25547;
continue;
}
} else
{var n_25548 = cljs.core.first(seq__25528_25542__$1);n_25548.removeAttribute(cljs.core.name(name));
{
var G__25549 = cljs.core.next(seq__25528_25542__$1);
var G__25550 = null;
var G__25551 = 0;
var G__25552 = 0;
seq__25528_25532 = G__25549;
chunk__25529_25533 = G__25550;
count__25530_25534 = G__25551;
i__25531_25535 = G__25552;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__25554 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25554,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25554,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$124)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25555_SHARP_){var attr = attrs__$1.item(p1__25555_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25562_25568 = cljs.core.seq(styles);var chunk__25563_25569 = null;var count__25564_25570 = 0;var i__25565_25571 = 0;while(true){
if((i__25565_25571 < count__25564_25570))
{var vec__25566_25572 = chunk__25563_25569.cljs$core$IIndexed$_nth$arity$2(null,i__25565_25571);var name_25573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25566_25572,0,null);var value_25574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25566_25572,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25573,cljs.core.array_seq([value_25574], 0));
{
var G__25575 = seq__25562_25568;
var G__25576 = chunk__25563_25569;
var G__25577 = count__25564_25570;
var G__25578 = (i__25565_25571 + 1);
seq__25562_25568 = G__25575;
chunk__25563_25569 = G__25576;
count__25564_25570 = G__25577;
i__25565_25571 = G__25578;
continue;
}
} else
{var temp__4092__auto___25579 = cljs.core.seq(seq__25562_25568);if(temp__4092__auto___25579)
{var seq__25562_25580__$1 = temp__4092__auto___25579;if(cljs.core.chunked_seq_QMARK_(seq__25562_25580__$1))
{var c__4148__auto___25581 = cljs.core.chunk_first(seq__25562_25580__$1);{
var G__25582 = cljs.core.chunk_rest(seq__25562_25580__$1);
var G__25583 = c__4148__auto___25581;
var G__25584 = cljs.core.count(c__4148__auto___25581);
var G__25585 = 0;
seq__25562_25568 = G__25582;
chunk__25563_25569 = G__25583;
count__25564_25570 = G__25584;
i__25565_25571 = G__25585;
continue;
}
} else
{var vec__25567_25586 = cljs.core.first(seq__25562_25580__$1);var name_25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25567_25586,0,null);var value_25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25567_25586,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25587,cljs.core.array_seq([value_25588], 0));
{
var G__25589 = cljs.core.next(seq__25562_25580__$1);
var G__25590 = null;
var G__25591 = 0;
var G__25592 = 0;
seq__25562_25568 = G__25589;
chunk__25563_25569 = G__25590;
count__25564_25570 = G__25591;
i__25565_25571 = G__25592;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__25599_25605 = cljs.core.seq(attrs);var chunk__25600_25606 = null;var count__25601_25607 = 0;var i__25602_25608 = 0;while(true){
if((i__25602_25608 < count__25601_25607))
{var vec__25603_25609 = chunk__25600_25606.cljs$core$IIndexed$_nth$arity$2(null,i__25602_25608);var name_25610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25603_25609,0,null);var value_25611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25603_25609,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25610,cljs.core.array_seq([value_25611], 0));
{
var G__25612 = seq__25599_25605;
var G__25613 = chunk__25600_25606;
var G__25614 = count__25601_25607;
var G__25615 = (i__25602_25608 + 1);
seq__25599_25605 = G__25612;
chunk__25600_25606 = G__25613;
count__25601_25607 = G__25614;
i__25602_25608 = G__25615;
continue;
}
} else
{var temp__4092__auto___25616 = cljs.core.seq(seq__25599_25605);if(temp__4092__auto___25616)
{var seq__25599_25617__$1 = temp__4092__auto___25616;if(cljs.core.chunked_seq_QMARK_(seq__25599_25617__$1))
{var c__4148__auto___25618 = cljs.core.chunk_first(seq__25599_25617__$1);{
var G__25619 = cljs.core.chunk_rest(seq__25599_25617__$1);
var G__25620 = c__4148__auto___25618;
var G__25621 = cljs.core.count(c__4148__auto___25618);
var G__25622 = 0;
seq__25599_25605 = G__25619;
chunk__25600_25606 = G__25620;
count__25601_25607 = G__25621;
i__25602_25608 = G__25622;
continue;
}
} else
{var vec__25604_25623 = cljs.core.first(seq__25599_25617__$1);var name_25624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25604_25623,0,null);var value_25625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25604_25623,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25624,cljs.core.array_seq([value_25625], 0));
{
var G__25626 = cljs.core.next(seq__25599_25617__$1);
var G__25627 = null;
var G__25628 = 0;
var G__25629 = 0;
seq__25599_25605 = G__25626;
chunk__25600_25606 = G__25627;
count__25601_25607 = G__25628;
i__25602_25608 = G__25629;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__25634_25638 = cljs.core.seq(domina.nodes(content));var chunk__25635_25639 = null;var count__25636_25640 = 0;var i__25637_25641 = 0;while(true){
if((i__25637_25641 < count__25636_25640))
{var node_25642 = chunk__25635_25639.cljs$core$IIndexed$_nth$arity$2(null,i__25637_25641);goog.dom.classes.add(node_25642,class$);
{
var G__25643 = seq__25634_25638;
var G__25644 = chunk__25635_25639;
var G__25645 = count__25636_25640;
var G__25646 = (i__25637_25641 + 1);
seq__25634_25638 = G__25643;
chunk__25635_25639 = G__25644;
count__25636_25640 = G__25645;
i__25637_25641 = G__25646;
continue;
}
} else
{var temp__4092__auto___25647 = cljs.core.seq(seq__25634_25638);if(temp__4092__auto___25647)
{var seq__25634_25648__$1 = temp__4092__auto___25647;if(cljs.core.chunked_seq_QMARK_(seq__25634_25648__$1))
{var c__4148__auto___25649 = cljs.core.chunk_first(seq__25634_25648__$1);{
var G__25650 = cljs.core.chunk_rest(seq__25634_25648__$1);
var G__25651 = c__4148__auto___25649;
var G__25652 = cljs.core.count(c__4148__auto___25649);
var G__25653 = 0;
seq__25634_25638 = G__25650;
chunk__25635_25639 = G__25651;
count__25636_25640 = G__25652;
i__25637_25641 = G__25653;
continue;
}
} else
{var node_25654 = cljs.core.first(seq__25634_25648__$1);goog.dom.classes.add(node_25654,class$);
{
var G__25655 = cljs.core.next(seq__25634_25648__$1);
var G__25656 = null;
var G__25657 = 0;
var G__25658 = 0;
seq__25634_25638 = G__25655;
chunk__25635_25639 = G__25656;
count__25636_25640 = G__25657;
i__25637_25641 = G__25658;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25663_25667 = cljs.core.seq(domina.nodes(content));var chunk__25664_25668 = null;var count__25665_25669 = 0;var i__25666_25670 = 0;while(true){
if((i__25666_25670 < count__25665_25669))
{var node_25671 = chunk__25664_25668.cljs$core$IIndexed$_nth$arity$2(null,i__25666_25670);goog.dom.classes.remove(node_25671,class$);
{
var G__25672 = seq__25663_25667;
var G__25673 = chunk__25664_25668;
var G__25674 = count__25665_25669;
var G__25675 = (i__25666_25670 + 1);
seq__25663_25667 = G__25672;
chunk__25664_25668 = G__25673;
count__25665_25669 = G__25674;
i__25666_25670 = G__25675;
continue;
}
} else
{var temp__4092__auto___25676 = cljs.core.seq(seq__25663_25667);if(temp__4092__auto___25676)
{var seq__25663_25677__$1 = temp__4092__auto___25676;if(cljs.core.chunked_seq_QMARK_(seq__25663_25677__$1))
{var c__4148__auto___25678 = cljs.core.chunk_first(seq__25663_25677__$1);{
var G__25679 = cljs.core.chunk_rest(seq__25663_25677__$1);
var G__25680 = c__4148__auto___25678;
var G__25681 = cljs.core.count(c__4148__auto___25678);
var G__25682 = 0;
seq__25663_25667 = G__25679;
chunk__25664_25668 = G__25680;
count__25665_25669 = G__25681;
i__25666_25670 = G__25682;
continue;
}
} else
{var node_25683 = cljs.core.first(seq__25663_25677__$1);goog.dom.classes.remove(node_25683,class$);
{
var G__25684 = cljs.core.next(seq__25663_25677__$1);
var G__25685 = null;
var G__25686 = 0;
var G__25687 = 0;
seq__25663_25667 = G__25684;
chunk__25664_25668 = G__25685;
count__25665_25669 = G__25686;
i__25666_25670 = G__25687;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25692_25696 = cljs.core.seq(domina.nodes(content));var chunk__25693_25697 = null;var count__25694_25698 = 0;var i__25695_25699 = 0;while(true){
if((i__25695_25699 < count__25694_25698))
{var node_25700 = chunk__25693_25697.cljs$core$IIndexed$_nth$arity$2(null,i__25695_25699);goog.dom.classes.toggle(node_25700,class$);
{
var G__25701 = seq__25692_25696;
var G__25702 = chunk__25693_25697;
var G__25703 = count__25694_25698;
var G__25704 = (i__25695_25699 + 1);
seq__25692_25696 = G__25701;
chunk__25693_25697 = G__25702;
count__25694_25698 = G__25703;
i__25695_25699 = G__25704;
continue;
}
} else
{var temp__4092__auto___25705 = cljs.core.seq(seq__25692_25696);if(temp__4092__auto___25705)
{var seq__25692_25706__$1 = temp__4092__auto___25705;if(cljs.core.chunked_seq_QMARK_(seq__25692_25706__$1))
{var c__4148__auto___25707 = cljs.core.chunk_first(seq__25692_25706__$1);{
var G__25708 = cljs.core.chunk_rest(seq__25692_25706__$1);
var G__25709 = c__4148__auto___25707;
var G__25710 = cljs.core.count(c__4148__auto___25707);
var G__25711 = 0;
seq__25692_25696 = G__25708;
chunk__25693_25697 = G__25709;
count__25694_25698 = G__25710;
i__25695_25699 = G__25711;
continue;
}
} else
{var node_25712 = cljs.core.first(seq__25692_25706__$1);goog.dom.classes.toggle(node_25712,class$);
{
var G__25713 = cljs.core.next(seq__25692_25706__$1);
var G__25714 = null;
var G__25715 = 0;
var G__25716 = 0;
seq__25692_25696 = G__25713;
chunk__25693_25697 = G__25714;
count__25694_25698 = G__25715;
i__25695_25699 = G__25716;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25725__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__25721_25726 = cljs.core.seq(domina.nodes(content));var chunk__25722_25727 = null;var count__25723_25728 = 0;var i__25724_25729 = 0;while(true){
if((i__25724_25729 < count__25723_25728))
{var node_25730 = chunk__25722_25727.cljs$core$IIndexed$_nth$arity$2(null,i__25724_25729);goog.dom.classes.set(node_25730,classes_25725__$1);
{
var G__25731 = seq__25721_25726;
var G__25732 = chunk__25722_25727;
var G__25733 = count__25723_25728;
var G__25734 = (i__25724_25729 + 1);
seq__25721_25726 = G__25731;
chunk__25722_25727 = G__25732;
count__25723_25728 = G__25733;
i__25724_25729 = G__25734;
continue;
}
} else
{var temp__4092__auto___25735 = cljs.core.seq(seq__25721_25726);if(temp__4092__auto___25735)
{var seq__25721_25736__$1 = temp__4092__auto___25735;if(cljs.core.chunked_seq_QMARK_(seq__25721_25736__$1))
{var c__4148__auto___25737 = cljs.core.chunk_first(seq__25721_25736__$1);{
var G__25738 = cljs.core.chunk_rest(seq__25721_25736__$1);
var G__25739 = c__4148__auto___25737;
var G__25740 = cljs.core.count(c__4148__auto___25737);
var G__25741 = 0;
seq__25721_25726 = G__25738;
chunk__25722_25727 = G__25739;
count__25723_25728 = G__25740;
i__25724_25729 = G__25741;
continue;
}
} else
{var node_25742 = cljs.core.first(seq__25721_25736__$1);goog.dom.classes.set(node_25742,classes_25725__$1);
{
var G__25743 = cljs.core.next(seq__25721_25736__$1);
var G__25744 = null;
var G__25745 = 0;
var G__25746 = 0;
seq__25721_25726 = G__25743;
chunk__25722_25727 = G__25744;
count__25723_25728 = G__25745;
i__25724_25729 = G__25746;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25751_25755 = cljs.core.seq(domina.nodes(content));var chunk__25752_25756 = null;var count__25753_25757 = 0;var i__25754_25758 = 0;while(true){
if((i__25754_25758 < count__25753_25757))
{var node_25759 = chunk__25752_25756.cljs$core$IIndexed$_nth$arity$2(null,i__25754_25758);goog.dom.setTextContent(node_25759,value);
{
var G__25760 = seq__25751_25755;
var G__25761 = chunk__25752_25756;
var G__25762 = count__25753_25757;
var G__25763 = (i__25754_25758 + 1);
seq__25751_25755 = G__25760;
chunk__25752_25756 = G__25761;
count__25753_25757 = G__25762;
i__25754_25758 = G__25763;
continue;
}
} else
{var temp__4092__auto___25764 = cljs.core.seq(seq__25751_25755);if(temp__4092__auto___25764)
{var seq__25751_25765__$1 = temp__4092__auto___25764;if(cljs.core.chunked_seq_QMARK_(seq__25751_25765__$1))
{var c__4148__auto___25766 = cljs.core.chunk_first(seq__25751_25765__$1);{
var G__25767 = cljs.core.chunk_rest(seq__25751_25765__$1);
var G__25768 = c__4148__auto___25766;
var G__25769 = cljs.core.count(c__4148__auto___25766);
var G__25770 = 0;
seq__25751_25755 = G__25767;
chunk__25752_25756 = G__25768;
count__25753_25757 = G__25769;
i__25754_25758 = G__25770;
continue;
}
} else
{var node_25771 = cljs.core.first(seq__25751_25765__$1);goog.dom.setTextContent(node_25771,value);
{
var G__25772 = cljs.core.next(seq__25751_25765__$1);
var G__25773 = null;
var G__25774 = 0;
var G__25775 = 0;
seq__25751_25755 = G__25772;
chunk__25752_25756 = G__25773;
count__25753_25757 = G__25774;
i__25754_25758 = G__25775;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25780_25784 = cljs.core.seq(domina.nodes(content));var chunk__25781_25785 = null;var count__25782_25786 = 0;var i__25783_25787 = 0;while(true){
if((i__25783_25787 < count__25782_25786))
{var node_25788 = chunk__25781_25785.cljs$core$IIndexed$_nth$arity$2(null,i__25783_25787);goog.dom.forms.setValue(node_25788,value);
{
var G__25789 = seq__25780_25784;
var G__25790 = chunk__25781_25785;
var G__25791 = count__25782_25786;
var G__25792 = (i__25783_25787 + 1);
seq__25780_25784 = G__25789;
chunk__25781_25785 = G__25790;
count__25782_25786 = G__25791;
i__25783_25787 = G__25792;
continue;
}
} else
{var temp__4092__auto___25793 = cljs.core.seq(seq__25780_25784);if(temp__4092__auto___25793)
{var seq__25780_25794__$1 = temp__4092__auto___25793;if(cljs.core.chunked_seq_QMARK_(seq__25780_25794__$1))
{var c__4148__auto___25795 = cljs.core.chunk_first(seq__25780_25794__$1);{
var G__25796 = cljs.core.chunk_rest(seq__25780_25794__$1);
var G__25797 = c__4148__auto___25795;
var G__25798 = cljs.core.count(c__4148__auto___25795);
var G__25799 = 0;
seq__25780_25784 = G__25796;
chunk__25781_25785 = G__25797;
count__25782_25786 = G__25798;
i__25783_25787 = G__25799;
continue;
}
} else
{var node_25800 = cljs.core.first(seq__25780_25794__$1);goog.dom.forms.setValue(node_25800,value);
{
var G__25801 = cljs.core.next(seq__25780_25794__$1);
var G__25802 = null;
var G__25803 = 0;
var G__25804 = 0;
seq__25780_25784 = G__25801;
chunk__25781_25785 = G__25802;
count__25782_25786 = G__25803;
i__25783_25787 = G__25804;
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
{var value_25815 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25811_25816 = cljs.core.seq(domina.nodes(content));var chunk__25812_25817 = null;var count__25813_25818 = 0;var i__25814_25819 = 0;while(true){
if((i__25814_25819 < count__25813_25818))
{var node_25820 = chunk__25812_25817.cljs$core$IIndexed$_nth$arity$2(null,i__25814_25819);node_25820.innerHTML = value_25815;
{
var G__25821 = seq__25811_25816;
var G__25822 = chunk__25812_25817;
var G__25823 = count__25813_25818;
var G__25824 = (i__25814_25819 + 1);
seq__25811_25816 = G__25821;
chunk__25812_25817 = G__25822;
count__25813_25818 = G__25823;
i__25814_25819 = G__25824;
continue;
}
} else
{var temp__4092__auto___25825 = cljs.core.seq(seq__25811_25816);if(temp__4092__auto___25825)
{var seq__25811_25826__$1 = temp__4092__auto___25825;if(cljs.core.chunked_seq_QMARK_(seq__25811_25826__$1))
{var c__4148__auto___25827 = cljs.core.chunk_first(seq__25811_25826__$1);{
var G__25828 = cljs.core.chunk_rest(seq__25811_25826__$1);
var G__25829 = c__4148__auto___25827;
var G__25830 = cljs.core.count(c__4148__auto___25827);
var G__25831 = 0;
seq__25811_25816 = G__25828;
chunk__25812_25817 = G__25829;
count__25813_25818 = G__25830;
i__25814_25819 = G__25831;
continue;
}
} else
{var node_25832 = cljs.core.first(seq__25811_25826__$1);node_25832.innerHTML = value_25815;
{
var G__25833 = cljs.core.next(seq__25811_25826__$1);
var G__25834 = null;
var G__25835 = 0;
var G__25836 = 0;
seq__25811_25816 = G__25833;
chunk__25812_25817 = G__25834;
count__25813_25818 = G__25835;
i__25814_25819 = G__25836;
continue;
}
}
} else
{}
}
break;
}
}catch (e25810){if((e25810 instanceof Error))
{var e_25837 = e25810;domina.replace_children_BANG_(content,value_25815);
} else
{if(cljs.core.constant$keyword$124)
{throw e25810;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25844_25848 = cljs.core.seq(children);var chunk__25845_25849 = null;var count__25846_25850 = 0;var i__25847_25851 = 0;while(true){
if((i__25847_25851 < count__25846_25850))
{var child_25852 = chunk__25845_25849.cljs$core$IIndexed$_nth$arity$2(null,i__25847_25851);frag.appendChild(child_25852);
{
var G__25853 = seq__25844_25848;
var G__25854 = chunk__25845_25849;
var G__25855 = count__25846_25850;
var G__25856 = (i__25847_25851 + 1);
seq__25844_25848 = G__25853;
chunk__25845_25849 = G__25854;
count__25846_25850 = G__25855;
i__25847_25851 = G__25856;
continue;
}
} else
{var temp__4092__auto___25857 = cljs.core.seq(seq__25844_25848);if(temp__4092__auto___25857)
{var seq__25844_25858__$1 = temp__4092__auto___25857;if(cljs.core.chunked_seq_QMARK_(seq__25844_25858__$1))
{var c__4148__auto___25859 = cljs.core.chunk_first(seq__25844_25858__$1);{
var G__25860 = cljs.core.chunk_rest(seq__25844_25858__$1);
var G__25861 = c__4148__auto___25859;
var G__25862 = cljs.core.count(c__4148__auto___25859);
var G__25863 = 0;
seq__25844_25848 = G__25860;
chunk__25845_25849 = G__25861;
count__25846_25850 = G__25862;
i__25847_25851 = G__25863;
continue;
}
} else
{var child_25864 = cljs.core.first(seq__25844_25858__$1);frag.appendChild(child_25864);
{
var G__25865 = cljs.core.next(seq__25844_25858__$1);
var G__25866 = null;
var G__25867 = 0;
var G__25868 = 0;
seq__25844_25848 = G__25865;
chunk__25845_25849 = G__25866;
count__25846_25850 = G__25867;
i__25847_25851 = G__25868;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25838_SHARP_,p2__25839_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__25838_SHARP_,p2__25839_SHARP_) : f.call(null,p1__25838_SHARP_,p2__25839_SHARP_));
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
{if((function (){var G__25870 = list_thing;if(G__25870)
{var bit__4050__auto__ = (G__25870.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25870.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25870.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25870);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25870);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$125)
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
{if((function (){var G__25871 = content;if(G__25871)
{var bit__4050__auto__ = (G__25871.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25871.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25871.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25871);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$125)
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
{if((function (){var G__25872 = content;if(G__25872)
{var bit__4050__auto__ = (G__25872.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25872.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25872.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25872);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$125)
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
