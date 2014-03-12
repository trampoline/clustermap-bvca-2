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
var opt_wrapper_39527 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$541,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39528,table_section_wrapper_39528,opt_wrapper_39527,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39529,table_section_wrapper_39528,cell_wrapper_39529,opt_wrapper_39527,table_section_wrapper_39528,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39528]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39534 = cljs.core.seq(tbody);var chunk__39535 = null;var count__39536 = 0;var i__39537 = 0;while(true){
if((i__39537 < count__39536))
{var child = chunk__39535.cljs$core$IIndexed$_nth$arity$2(null,i__39537);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39538 = seq__39534;
var G__39539 = chunk__39535;
var G__39540 = count__39536;
var G__39541 = (i__39537 + 1);
seq__39534 = G__39538;
chunk__39535 = G__39539;
count__39536 = G__39540;
i__39537 = G__39541;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39534);if(temp__4092__auto__)
{var seq__39534__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39534__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39534__$1);{
var G__39542 = cljs.core.chunk_rest(seq__39534__$1);
var G__39543 = c__4189__auto__;
var G__39544 = cljs.core.count(c__4189__auto__);
var G__39545 = 0;
seq__39534 = G__39542;
chunk__39535 = G__39543;
count__39536 = G__39544;
i__39537 = G__39545;
continue;
}
} else
{var child = cljs.core.first(seq__39534__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39546 = cljs.core.next(seq__39534__$1);
var G__39547 = null;
var G__39548 = 0;
var G__39549 = 0;
seq__39534 = G__39546;
chunk__39535 = G__39547;
count__39536 = G__39548;
i__39537 = G__39549;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39551 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$541.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39551,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39551,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39551,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39552 = wrapper.lastChild;
var G__39553 = (level - 1);
wrapper = G__39552;
level = G__39553;
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
domina.DomContent = (function (){var obj39555 = {};return obj39555;
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
log_debug.cljs$lang$applyTo = (function (arglist__39556){
var mesg = cljs.core.seq(arglist__39556);
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
log.cljs$lang$applyTo = (function (arglist__39557){
var mesg = cljs.core.seq(arglist__39557);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39558){
var contents = cljs.core.seq(arglist__39558);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39559_SHARP_){return p1__39559_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39560_SHARP_,p2__39561_SHARP_){return goog.dom.insertChildAt(p1__39560_SHARP_,p2__39561_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39560_SHARP_,p2__39561_SHARP_){return goog.dom.insertChildAt(p1__39560_SHARP_,p2__39561_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39563_SHARP_,p2__39562_SHARP_){return goog.dom.insertSiblingBefore(p2__39562_SHARP_,p1__39563_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39563_SHARP_,p2__39562_SHARP_){return goog.dom.insertSiblingBefore(p2__39562_SHARP_,p1__39563_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39565_SHARP_,p2__39564_SHARP_){return goog.dom.insertSiblingAfter(p2__39564_SHARP_,p1__39565_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39565_SHARP_,p2__39564_SHARP_){return goog.dom.insertSiblingAfter(p2__39564_SHARP_,p1__39565_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39567_SHARP_,p2__39566_SHARP_){return goog.dom.replaceNode(p2__39566_SHARP_,p1__39567_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39567_SHARP_,p2__39566_SHARP_){return goog.dom.replaceNode(p2__39566_SHARP_,p1__39567_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39572_39576 = cljs.core.seq(domina.nodes(content));var chunk__39573_39577 = null;var count__39574_39578 = 0;var i__39575_39579 = 0;while(true){
if((i__39575_39579 < count__39574_39578))
{var n_39580 = chunk__39573_39577.cljs$core$IIndexed$_nth$arity$2(null,i__39575_39579);goog.style.setStyle(n_39580,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39581 = seq__39572_39576;
var G__39582 = chunk__39573_39577;
var G__39583 = count__39574_39578;
var G__39584 = (i__39575_39579 + 1);
seq__39572_39576 = G__39581;
chunk__39573_39577 = G__39582;
count__39574_39578 = G__39583;
i__39575_39579 = G__39584;
continue;
}
} else
{var temp__4092__auto___39585 = cljs.core.seq(seq__39572_39576);if(temp__4092__auto___39585)
{var seq__39572_39586__$1 = temp__4092__auto___39585;if(cljs.core.chunked_seq_QMARK_(seq__39572_39586__$1))
{var c__4189__auto___39587 = cljs.core.chunk_first(seq__39572_39586__$1);{
var G__39588 = cljs.core.chunk_rest(seq__39572_39586__$1);
var G__39589 = c__4189__auto___39587;
var G__39590 = cljs.core.count(c__4189__auto___39587);
var G__39591 = 0;
seq__39572_39576 = G__39588;
chunk__39573_39577 = G__39589;
count__39574_39578 = G__39590;
i__39575_39579 = G__39591;
continue;
}
} else
{var n_39592 = cljs.core.first(seq__39572_39586__$1);goog.style.setStyle(n_39592,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39593 = cljs.core.next(seq__39572_39586__$1);
var G__39594 = null;
var G__39595 = 0;
var G__39596 = 0;
seq__39572_39576 = G__39593;
chunk__39573_39577 = G__39594;
count__39574_39578 = G__39595;
i__39575_39579 = G__39596;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39597){
var content = cljs.core.first(arglist__39597);
arglist__39597 = cljs.core.next(arglist__39597);
var name = cljs.core.first(arglist__39597);
var value = cljs.core.rest(arglist__39597);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39602_39606 = cljs.core.seq(domina.nodes(content));var chunk__39603_39607 = null;var count__39604_39608 = 0;var i__39605_39609 = 0;while(true){
if((i__39605_39609 < count__39604_39608))
{var n_39610 = chunk__39603_39607.cljs$core$IIndexed$_nth$arity$2(null,i__39605_39609);n_39610.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39611 = seq__39602_39606;
var G__39612 = chunk__39603_39607;
var G__39613 = count__39604_39608;
var G__39614 = (i__39605_39609 + 1);
seq__39602_39606 = G__39611;
chunk__39603_39607 = G__39612;
count__39604_39608 = G__39613;
i__39605_39609 = G__39614;
continue;
}
} else
{var temp__4092__auto___39615 = cljs.core.seq(seq__39602_39606);if(temp__4092__auto___39615)
{var seq__39602_39616__$1 = temp__4092__auto___39615;if(cljs.core.chunked_seq_QMARK_(seq__39602_39616__$1))
{var c__4189__auto___39617 = cljs.core.chunk_first(seq__39602_39616__$1);{
var G__39618 = cljs.core.chunk_rest(seq__39602_39616__$1);
var G__39619 = c__4189__auto___39617;
var G__39620 = cljs.core.count(c__4189__auto___39617);
var G__39621 = 0;
seq__39602_39606 = G__39618;
chunk__39603_39607 = G__39619;
count__39604_39608 = G__39620;
i__39605_39609 = G__39621;
continue;
}
} else
{var n_39622 = cljs.core.first(seq__39602_39616__$1);n_39622.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39623 = cljs.core.next(seq__39602_39616__$1);
var G__39624 = null;
var G__39625 = 0;
var G__39626 = 0;
seq__39602_39606 = G__39623;
chunk__39603_39607 = G__39624;
count__39604_39608 = G__39625;
i__39605_39609 = G__39626;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39627){
var content = cljs.core.first(arglist__39627);
arglist__39627 = cljs.core.next(arglist__39627);
var name = cljs.core.first(arglist__39627);
var value = cljs.core.rest(arglist__39627);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39632_39636 = cljs.core.seq(domina.nodes(content));var chunk__39633_39637 = null;var count__39634_39638 = 0;var i__39635_39639 = 0;while(true){
if((i__39635_39639 < count__39634_39638))
{var n_39640 = chunk__39633_39637.cljs$core$IIndexed$_nth$arity$2(null,i__39635_39639);n_39640.removeAttribute(cljs.core.name(name));
{
var G__39641 = seq__39632_39636;
var G__39642 = chunk__39633_39637;
var G__39643 = count__39634_39638;
var G__39644 = (i__39635_39639 + 1);
seq__39632_39636 = G__39641;
chunk__39633_39637 = G__39642;
count__39634_39638 = G__39643;
i__39635_39639 = G__39644;
continue;
}
} else
{var temp__4092__auto___39645 = cljs.core.seq(seq__39632_39636);if(temp__4092__auto___39645)
{var seq__39632_39646__$1 = temp__4092__auto___39645;if(cljs.core.chunked_seq_QMARK_(seq__39632_39646__$1))
{var c__4189__auto___39647 = cljs.core.chunk_first(seq__39632_39646__$1);{
var G__39648 = cljs.core.chunk_rest(seq__39632_39646__$1);
var G__39649 = c__4189__auto___39647;
var G__39650 = cljs.core.count(c__4189__auto___39647);
var G__39651 = 0;
seq__39632_39636 = G__39648;
chunk__39633_39637 = G__39649;
count__39634_39638 = G__39650;
i__39635_39639 = G__39651;
continue;
}
} else
{var n_39652 = cljs.core.first(seq__39632_39646__$1);n_39652.removeAttribute(cljs.core.name(name));
{
var G__39653 = cljs.core.next(seq__39632_39646__$1);
var G__39654 = null;
var G__39655 = 0;
var G__39656 = 0;
seq__39632_39636 = G__39653;
chunk__39633_39637 = G__39654;
count__39634_39638 = G__39655;
i__39635_39639 = G__39656;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39658 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39658,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39658,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
{if(cljs.core.constant$keyword$540)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39659_SHARP_){var attr = attrs__$1.item(p1__39659_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39666_39672 = cljs.core.seq(styles);var chunk__39667_39673 = null;var count__39668_39674 = 0;var i__39669_39675 = 0;while(true){
if((i__39669_39675 < count__39668_39674))
{var vec__39670_39676 = chunk__39667_39673.cljs$core$IIndexed$_nth$arity$2(null,i__39669_39675);var name_39677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39670_39676,0,null);var value_39678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39670_39676,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39677,cljs.core.array_seq([value_39678], 0));
{
var G__39679 = seq__39666_39672;
var G__39680 = chunk__39667_39673;
var G__39681 = count__39668_39674;
var G__39682 = (i__39669_39675 + 1);
seq__39666_39672 = G__39679;
chunk__39667_39673 = G__39680;
count__39668_39674 = G__39681;
i__39669_39675 = G__39682;
continue;
}
} else
{var temp__4092__auto___39683 = cljs.core.seq(seq__39666_39672);if(temp__4092__auto___39683)
{var seq__39666_39684__$1 = temp__4092__auto___39683;if(cljs.core.chunked_seq_QMARK_(seq__39666_39684__$1))
{var c__4189__auto___39685 = cljs.core.chunk_first(seq__39666_39684__$1);{
var G__39686 = cljs.core.chunk_rest(seq__39666_39684__$1);
var G__39687 = c__4189__auto___39685;
var G__39688 = cljs.core.count(c__4189__auto___39685);
var G__39689 = 0;
seq__39666_39672 = G__39686;
chunk__39667_39673 = G__39687;
count__39668_39674 = G__39688;
i__39669_39675 = G__39689;
continue;
}
} else
{var vec__39671_39690 = cljs.core.first(seq__39666_39684__$1);var name_39691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39671_39690,0,null);var value_39692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39671_39690,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39691,cljs.core.array_seq([value_39692], 0));
{
var G__39693 = cljs.core.next(seq__39666_39684__$1);
var G__39694 = null;
var G__39695 = 0;
var G__39696 = 0;
seq__39666_39672 = G__39693;
chunk__39667_39673 = G__39694;
count__39668_39674 = G__39695;
i__39669_39675 = G__39696;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39703_39709 = cljs.core.seq(attrs);var chunk__39704_39710 = null;var count__39705_39711 = 0;var i__39706_39712 = 0;while(true){
if((i__39706_39712 < count__39705_39711))
{var vec__39707_39713 = chunk__39704_39710.cljs$core$IIndexed$_nth$arity$2(null,i__39706_39712);var name_39714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39707_39713,0,null);var value_39715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39707_39713,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39714,cljs.core.array_seq([value_39715], 0));
{
var G__39716 = seq__39703_39709;
var G__39717 = chunk__39704_39710;
var G__39718 = count__39705_39711;
var G__39719 = (i__39706_39712 + 1);
seq__39703_39709 = G__39716;
chunk__39704_39710 = G__39717;
count__39705_39711 = G__39718;
i__39706_39712 = G__39719;
continue;
}
} else
{var temp__4092__auto___39720 = cljs.core.seq(seq__39703_39709);if(temp__4092__auto___39720)
{var seq__39703_39721__$1 = temp__4092__auto___39720;if(cljs.core.chunked_seq_QMARK_(seq__39703_39721__$1))
{var c__4189__auto___39722 = cljs.core.chunk_first(seq__39703_39721__$1);{
var G__39723 = cljs.core.chunk_rest(seq__39703_39721__$1);
var G__39724 = c__4189__auto___39722;
var G__39725 = cljs.core.count(c__4189__auto___39722);
var G__39726 = 0;
seq__39703_39709 = G__39723;
chunk__39704_39710 = G__39724;
count__39705_39711 = G__39725;
i__39706_39712 = G__39726;
continue;
}
} else
{var vec__39708_39727 = cljs.core.first(seq__39703_39721__$1);var name_39728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39708_39727,0,null);var value_39729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39708_39727,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39728,cljs.core.array_seq([value_39729], 0));
{
var G__39730 = cljs.core.next(seq__39703_39721__$1);
var G__39731 = null;
var G__39732 = 0;
var G__39733 = 0;
seq__39703_39709 = G__39730;
chunk__39704_39710 = G__39731;
count__39705_39711 = G__39732;
i__39706_39712 = G__39733;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39738_39742 = cljs.core.seq(domina.nodes(content));var chunk__39739_39743 = null;var count__39740_39744 = 0;var i__39741_39745 = 0;while(true){
if((i__39741_39745 < count__39740_39744))
{var node_39746 = chunk__39739_39743.cljs$core$IIndexed$_nth$arity$2(null,i__39741_39745);goog.dom.classes.add(node_39746,class$);
{
var G__39747 = seq__39738_39742;
var G__39748 = chunk__39739_39743;
var G__39749 = count__39740_39744;
var G__39750 = (i__39741_39745 + 1);
seq__39738_39742 = G__39747;
chunk__39739_39743 = G__39748;
count__39740_39744 = G__39749;
i__39741_39745 = G__39750;
continue;
}
} else
{var temp__4092__auto___39751 = cljs.core.seq(seq__39738_39742);if(temp__4092__auto___39751)
{var seq__39738_39752__$1 = temp__4092__auto___39751;if(cljs.core.chunked_seq_QMARK_(seq__39738_39752__$1))
{var c__4189__auto___39753 = cljs.core.chunk_first(seq__39738_39752__$1);{
var G__39754 = cljs.core.chunk_rest(seq__39738_39752__$1);
var G__39755 = c__4189__auto___39753;
var G__39756 = cljs.core.count(c__4189__auto___39753);
var G__39757 = 0;
seq__39738_39742 = G__39754;
chunk__39739_39743 = G__39755;
count__39740_39744 = G__39756;
i__39741_39745 = G__39757;
continue;
}
} else
{var node_39758 = cljs.core.first(seq__39738_39752__$1);goog.dom.classes.add(node_39758,class$);
{
var G__39759 = cljs.core.next(seq__39738_39752__$1);
var G__39760 = null;
var G__39761 = 0;
var G__39762 = 0;
seq__39738_39742 = G__39759;
chunk__39739_39743 = G__39760;
count__39740_39744 = G__39761;
i__39741_39745 = G__39762;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39767_39771 = cljs.core.seq(domina.nodes(content));var chunk__39768_39772 = null;var count__39769_39773 = 0;var i__39770_39774 = 0;while(true){
if((i__39770_39774 < count__39769_39773))
{var node_39775 = chunk__39768_39772.cljs$core$IIndexed$_nth$arity$2(null,i__39770_39774);goog.dom.classes.remove(node_39775,class$);
{
var G__39776 = seq__39767_39771;
var G__39777 = chunk__39768_39772;
var G__39778 = count__39769_39773;
var G__39779 = (i__39770_39774 + 1);
seq__39767_39771 = G__39776;
chunk__39768_39772 = G__39777;
count__39769_39773 = G__39778;
i__39770_39774 = G__39779;
continue;
}
} else
{var temp__4092__auto___39780 = cljs.core.seq(seq__39767_39771);if(temp__4092__auto___39780)
{var seq__39767_39781__$1 = temp__4092__auto___39780;if(cljs.core.chunked_seq_QMARK_(seq__39767_39781__$1))
{var c__4189__auto___39782 = cljs.core.chunk_first(seq__39767_39781__$1);{
var G__39783 = cljs.core.chunk_rest(seq__39767_39781__$1);
var G__39784 = c__4189__auto___39782;
var G__39785 = cljs.core.count(c__4189__auto___39782);
var G__39786 = 0;
seq__39767_39771 = G__39783;
chunk__39768_39772 = G__39784;
count__39769_39773 = G__39785;
i__39770_39774 = G__39786;
continue;
}
} else
{var node_39787 = cljs.core.first(seq__39767_39781__$1);goog.dom.classes.remove(node_39787,class$);
{
var G__39788 = cljs.core.next(seq__39767_39781__$1);
var G__39789 = null;
var G__39790 = 0;
var G__39791 = 0;
seq__39767_39771 = G__39788;
chunk__39768_39772 = G__39789;
count__39769_39773 = G__39790;
i__39770_39774 = G__39791;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39796_39800 = cljs.core.seq(domina.nodes(content));var chunk__39797_39801 = null;var count__39798_39802 = 0;var i__39799_39803 = 0;while(true){
if((i__39799_39803 < count__39798_39802))
{var node_39804 = chunk__39797_39801.cljs$core$IIndexed$_nth$arity$2(null,i__39799_39803);goog.dom.classes.toggle(node_39804,class$);
{
var G__39805 = seq__39796_39800;
var G__39806 = chunk__39797_39801;
var G__39807 = count__39798_39802;
var G__39808 = (i__39799_39803 + 1);
seq__39796_39800 = G__39805;
chunk__39797_39801 = G__39806;
count__39798_39802 = G__39807;
i__39799_39803 = G__39808;
continue;
}
} else
{var temp__4092__auto___39809 = cljs.core.seq(seq__39796_39800);if(temp__4092__auto___39809)
{var seq__39796_39810__$1 = temp__4092__auto___39809;if(cljs.core.chunked_seq_QMARK_(seq__39796_39810__$1))
{var c__4189__auto___39811 = cljs.core.chunk_first(seq__39796_39810__$1);{
var G__39812 = cljs.core.chunk_rest(seq__39796_39810__$1);
var G__39813 = c__4189__auto___39811;
var G__39814 = cljs.core.count(c__4189__auto___39811);
var G__39815 = 0;
seq__39796_39800 = G__39812;
chunk__39797_39801 = G__39813;
count__39798_39802 = G__39814;
i__39799_39803 = G__39815;
continue;
}
} else
{var node_39816 = cljs.core.first(seq__39796_39810__$1);goog.dom.classes.toggle(node_39816,class$);
{
var G__39817 = cljs.core.next(seq__39796_39810__$1);
var G__39818 = null;
var G__39819 = 0;
var G__39820 = 0;
seq__39796_39800 = G__39817;
chunk__39797_39801 = G__39818;
count__39798_39802 = G__39819;
i__39799_39803 = G__39820;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39829__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39825_39830 = cljs.core.seq(domina.nodes(content));var chunk__39826_39831 = null;var count__39827_39832 = 0;var i__39828_39833 = 0;while(true){
if((i__39828_39833 < count__39827_39832))
{var node_39834 = chunk__39826_39831.cljs$core$IIndexed$_nth$arity$2(null,i__39828_39833);goog.dom.classes.set(node_39834,classes_39829__$1);
{
var G__39835 = seq__39825_39830;
var G__39836 = chunk__39826_39831;
var G__39837 = count__39827_39832;
var G__39838 = (i__39828_39833 + 1);
seq__39825_39830 = G__39835;
chunk__39826_39831 = G__39836;
count__39827_39832 = G__39837;
i__39828_39833 = G__39838;
continue;
}
} else
{var temp__4092__auto___39839 = cljs.core.seq(seq__39825_39830);if(temp__4092__auto___39839)
{var seq__39825_39840__$1 = temp__4092__auto___39839;if(cljs.core.chunked_seq_QMARK_(seq__39825_39840__$1))
{var c__4189__auto___39841 = cljs.core.chunk_first(seq__39825_39840__$1);{
var G__39842 = cljs.core.chunk_rest(seq__39825_39840__$1);
var G__39843 = c__4189__auto___39841;
var G__39844 = cljs.core.count(c__4189__auto___39841);
var G__39845 = 0;
seq__39825_39830 = G__39842;
chunk__39826_39831 = G__39843;
count__39827_39832 = G__39844;
i__39828_39833 = G__39845;
continue;
}
} else
{var node_39846 = cljs.core.first(seq__39825_39840__$1);goog.dom.classes.set(node_39846,classes_39829__$1);
{
var G__39847 = cljs.core.next(seq__39825_39840__$1);
var G__39848 = null;
var G__39849 = 0;
var G__39850 = 0;
seq__39825_39830 = G__39847;
chunk__39826_39831 = G__39848;
count__39827_39832 = G__39849;
i__39828_39833 = G__39850;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39855_39859 = cljs.core.seq(domina.nodes(content));var chunk__39856_39860 = null;var count__39857_39861 = 0;var i__39858_39862 = 0;while(true){
if((i__39858_39862 < count__39857_39861))
{var node_39863 = chunk__39856_39860.cljs$core$IIndexed$_nth$arity$2(null,i__39858_39862);goog.dom.setTextContent(node_39863,value);
{
var G__39864 = seq__39855_39859;
var G__39865 = chunk__39856_39860;
var G__39866 = count__39857_39861;
var G__39867 = (i__39858_39862 + 1);
seq__39855_39859 = G__39864;
chunk__39856_39860 = G__39865;
count__39857_39861 = G__39866;
i__39858_39862 = G__39867;
continue;
}
} else
{var temp__4092__auto___39868 = cljs.core.seq(seq__39855_39859);if(temp__4092__auto___39868)
{var seq__39855_39869__$1 = temp__4092__auto___39868;if(cljs.core.chunked_seq_QMARK_(seq__39855_39869__$1))
{var c__4189__auto___39870 = cljs.core.chunk_first(seq__39855_39869__$1);{
var G__39871 = cljs.core.chunk_rest(seq__39855_39869__$1);
var G__39872 = c__4189__auto___39870;
var G__39873 = cljs.core.count(c__4189__auto___39870);
var G__39874 = 0;
seq__39855_39859 = G__39871;
chunk__39856_39860 = G__39872;
count__39857_39861 = G__39873;
i__39858_39862 = G__39874;
continue;
}
} else
{var node_39875 = cljs.core.first(seq__39855_39869__$1);goog.dom.setTextContent(node_39875,value);
{
var G__39876 = cljs.core.next(seq__39855_39869__$1);
var G__39877 = null;
var G__39878 = 0;
var G__39879 = 0;
seq__39855_39859 = G__39876;
chunk__39856_39860 = G__39877;
count__39857_39861 = G__39878;
i__39858_39862 = G__39879;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39884_39888 = cljs.core.seq(domina.nodes(content));var chunk__39885_39889 = null;var count__39886_39890 = 0;var i__39887_39891 = 0;while(true){
if((i__39887_39891 < count__39886_39890))
{var node_39892 = chunk__39885_39889.cljs$core$IIndexed$_nth$arity$2(null,i__39887_39891);goog.dom.forms.setValue(node_39892,value);
{
var G__39893 = seq__39884_39888;
var G__39894 = chunk__39885_39889;
var G__39895 = count__39886_39890;
var G__39896 = (i__39887_39891 + 1);
seq__39884_39888 = G__39893;
chunk__39885_39889 = G__39894;
count__39886_39890 = G__39895;
i__39887_39891 = G__39896;
continue;
}
} else
{var temp__4092__auto___39897 = cljs.core.seq(seq__39884_39888);if(temp__4092__auto___39897)
{var seq__39884_39898__$1 = temp__4092__auto___39897;if(cljs.core.chunked_seq_QMARK_(seq__39884_39898__$1))
{var c__4189__auto___39899 = cljs.core.chunk_first(seq__39884_39898__$1);{
var G__39900 = cljs.core.chunk_rest(seq__39884_39898__$1);
var G__39901 = c__4189__auto___39899;
var G__39902 = cljs.core.count(c__4189__auto___39899);
var G__39903 = 0;
seq__39884_39888 = G__39900;
chunk__39885_39889 = G__39901;
count__39886_39890 = G__39902;
i__39887_39891 = G__39903;
continue;
}
} else
{var node_39904 = cljs.core.first(seq__39884_39898__$1);goog.dom.forms.setValue(node_39904,value);
{
var G__39905 = cljs.core.next(seq__39884_39898__$1);
var G__39906 = null;
var G__39907 = 0;
var G__39908 = 0;
seq__39884_39888 = G__39905;
chunk__39885_39889 = G__39906;
count__39886_39890 = G__39907;
i__39887_39891 = G__39908;
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
{var value_39919 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39915_39920 = cljs.core.seq(domina.nodes(content));var chunk__39916_39921 = null;var count__39917_39922 = 0;var i__39918_39923 = 0;while(true){
if((i__39918_39923 < count__39917_39922))
{var node_39924 = chunk__39916_39921.cljs$core$IIndexed$_nth$arity$2(null,i__39918_39923);node_39924.innerHTML = value_39919;
{
var G__39925 = seq__39915_39920;
var G__39926 = chunk__39916_39921;
var G__39927 = count__39917_39922;
var G__39928 = (i__39918_39923 + 1);
seq__39915_39920 = G__39925;
chunk__39916_39921 = G__39926;
count__39917_39922 = G__39927;
i__39918_39923 = G__39928;
continue;
}
} else
{var temp__4092__auto___39929 = cljs.core.seq(seq__39915_39920);if(temp__4092__auto___39929)
{var seq__39915_39930__$1 = temp__4092__auto___39929;if(cljs.core.chunked_seq_QMARK_(seq__39915_39930__$1))
{var c__4189__auto___39931 = cljs.core.chunk_first(seq__39915_39930__$1);{
var G__39932 = cljs.core.chunk_rest(seq__39915_39930__$1);
var G__39933 = c__4189__auto___39931;
var G__39934 = cljs.core.count(c__4189__auto___39931);
var G__39935 = 0;
seq__39915_39920 = G__39932;
chunk__39916_39921 = G__39933;
count__39917_39922 = G__39934;
i__39918_39923 = G__39935;
continue;
}
} else
{var node_39936 = cljs.core.first(seq__39915_39930__$1);node_39936.innerHTML = value_39919;
{
var G__39937 = cljs.core.next(seq__39915_39930__$1);
var G__39938 = null;
var G__39939 = 0;
var G__39940 = 0;
seq__39915_39920 = G__39937;
chunk__39916_39921 = G__39938;
count__39917_39922 = G__39939;
i__39918_39923 = G__39940;
continue;
}
}
} else
{}
}
break;
}
}catch (e39914){if((e39914 instanceof Error))
{var e_39941 = e39914;domina.replace_children_BANG_(content,value_39919);
} else
{if(cljs.core.constant$keyword$540)
{throw e39914;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39948_39952 = cljs.core.seq(children);var chunk__39949_39953 = null;var count__39950_39954 = 0;var i__39951_39955 = 0;while(true){
if((i__39951_39955 < count__39950_39954))
{var child_39956 = chunk__39949_39953.cljs$core$IIndexed$_nth$arity$2(null,i__39951_39955);frag.appendChild(child_39956);
{
var G__39957 = seq__39948_39952;
var G__39958 = chunk__39949_39953;
var G__39959 = count__39950_39954;
var G__39960 = (i__39951_39955 + 1);
seq__39948_39952 = G__39957;
chunk__39949_39953 = G__39958;
count__39950_39954 = G__39959;
i__39951_39955 = G__39960;
continue;
}
} else
{var temp__4092__auto___39961 = cljs.core.seq(seq__39948_39952);if(temp__4092__auto___39961)
{var seq__39948_39962__$1 = temp__4092__auto___39961;if(cljs.core.chunked_seq_QMARK_(seq__39948_39962__$1))
{var c__4189__auto___39963 = cljs.core.chunk_first(seq__39948_39962__$1);{
var G__39964 = cljs.core.chunk_rest(seq__39948_39962__$1);
var G__39965 = c__4189__auto___39963;
var G__39966 = cljs.core.count(c__4189__auto___39963);
var G__39967 = 0;
seq__39948_39952 = G__39964;
chunk__39949_39953 = G__39965;
count__39950_39954 = G__39966;
i__39951_39955 = G__39967;
continue;
}
} else
{var child_39968 = cljs.core.first(seq__39948_39962__$1);frag.appendChild(child_39968);
{
var G__39969 = cljs.core.next(seq__39948_39962__$1);
var G__39970 = null;
var G__39971 = 0;
var G__39972 = 0;
seq__39948_39952 = G__39969;
chunk__39949_39953 = G__39970;
count__39950_39954 = G__39971;
i__39951_39955 = G__39972;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39942_SHARP_,p2__39943_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39942_SHARP_,p2__39943_SHARP_) : f.call(null,p1__39942_SHARP_,p2__39943_SHARP_));
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
{if((function (){var G__39974 = list_thing;if(G__39974)
{var bit__4091__auto__ = (G__39974.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39974.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39974.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39974);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39974);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$541)
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
{if((function (){var G__39975 = content;if(G__39975)
{var bit__4091__auto__ = (G__39975.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39975.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39975.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39975);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$541)
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
{if((function (){var G__39976 = content;if(G__39976)
{var bit__4091__auto__ = (G__39976.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39976.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39976.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39976);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39976);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$541)
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
