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
var opt_wrapper_25554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_25555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_25556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$149,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_25555,table_section_wrapper_25555,opt_wrapper_25554,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_25556,table_section_wrapper_25555,cell_wrapper_25556,opt_wrapper_25554,table_section_wrapper_25555,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_25555]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__25561 = cljs.core.seq(tbody);var chunk__25562 = null;var count__25563 = 0;var i__25564 = 0;while(true){
if((i__25564 < count__25563))
{var child = chunk__25562.cljs$core$IIndexed$_nth$arity$2(null,i__25564);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25565 = seq__25561;
var G__25566 = chunk__25562;
var G__25567 = count__25563;
var G__25568 = (i__25564 + 1);
seq__25561 = G__25565;
chunk__25562 = G__25566;
count__25563 = G__25567;
i__25564 = G__25568;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25561);if(temp__4092__auto__)
{var seq__25561__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25561__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25561__$1);{
var G__25569 = cljs.core.chunk_rest(seq__25561__$1);
var G__25570 = c__4148__auto__;
var G__25571 = cljs.core.count(c__4148__auto__);
var G__25572 = 0;
seq__25561 = G__25569;
chunk__25562 = G__25570;
count__25563 = G__25571;
i__25564 = G__25572;
continue;
}
} else
{var child = cljs.core.first(seq__25561__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25573 = cljs.core.next(seq__25561__$1);
var G__25574 = null;
var G__25575 = 0;
var G__25576 = 0;
seq__25561 = G__25573;
chunk__25562 = G__25574;
count__25563 = G__25575;
i__25564 = G__25576;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__25578 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25578,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25578,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25578,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__25579 = wrapper.lastChild;
var G__25580 = (level - 1);
wrapper = G__25579;
level = G__25580;
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
domina.DomContent = (function (){var obj25582 = {};return obj25582;
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
log_debug.cljs$lang$applyTo = (function (arglist__25583){
var mesg = cljs.core.seq(arglist__25583);
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
log.cljs$lang$applyTo = (function (arglist__25584){
var mesg = cljs.core.seq(arglist__25584);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25585){
var contents = cljs.core.seq(arglist__25585);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25586_SHARP_){return p1__25586_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25587_SHARP_,p2__25588_SHARP_){return goog.dom.insertChildAt(p1__25587_SHARP_,p2__25588_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__25587_SHARP_,p2__25588_SHARP_){return goog.dom.insertChildAt(p1__25587_SHARP_,p2__25588_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25590_SHARP_,p2__25589_SHARP_){return goog.dom.insertSiblingBefore(p2__25589_SHARP_,p1__25590_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25590_SHARP_,p2__25589_SHARP_){return goog.dom.insertSiblingBefore(p2__25589_SHARP_,p1__25590_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25592_SHARP_,p2__25591_SHARP_){return goog.dom.insertSiblingAfter(p2__25591_SHARP_,p1__25592_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25592_SHARP_,p2__25591_SHARP_){return goog.dom.insertSiblingAfter(p2__25591_SHARP_,p1__25592_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25594_SHARP_,p2__25593_SHARP_){return goog.dom.replaceNode(p2__25593_SHARP_,p1__25594_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25594_SHARP_,p2__25593_SHARP_){return goog.dom.replaceNode(p2__25593_SHARP_,p1__25594_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25599_25603 = cljs.core.seq(domina.nodes(content));var chunk__25600_25604 = null;var count__25601_25605 = 0;var i__25602_25606 = 0;while(true){
if((i__25602_25606 < count__25601_25605))
{var n_25607 = chunk__25600_25604.cljs$core$IIndexed$_nth$arity$2(null,i__25602_25606);goog.style.setStyle(n_25607,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25608 = seq__25599_25603;
var G__25609 = chunk__25600_25604;
var G__25610 = count__25601_25605;
var G__25611 = (i__25602_25606 + 1);
seq__25599_25603 = G__25608;
chunk__25600_25604 = G__25609;
count__25601_25605 = G__25610;
i__25602_25606 = G__25611;
continue;
}
} else
{var temp__4092__auto___25612 = cljs.core.seq(seq__25599_25603);if(temp__4092__auto___25612)
{var seq__25599_25613__$1 = temp__4092__auto___25612;if(cljs.core.chunked_seq_QMARK_(seq__25599_25613__$1))
{var c__4148__auto___25614 = cljs.core.chunk_first(seq__25599_25613__$1);{
var G__25615 = cljs.core.chunk_rest(seq__25599_25613__$1);
var G__25616 = c__4148__auto___25614;
var G__25617 = cljs.core.count(c__4148__auto___25614);
var G__25618 = 0;
seq__25599_25603 = G__25615;
chunk__25600_25604 = G__25616;
count__25601_25605 = G__25617;
i__25602_25606 = G__25618;
continue;
}
} else
{var n_25619 = cljs.core.first(seq__25599_25613__$1);goog.style.setStyle(n_25619,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25620 = cljs.core.next(seq__25599_25613__$1);
var G__25621 = null;
var G__25622 = 0;
var G__25623 = 0;
seq__25599_25603 = G__25620;
chunk__25600_25604 = G__25621;
count__25601_25605 = G__25622;
i__25602_25606 = G__25623;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25624){
var content = cljs.core.first(arglist__25624);
arglist__25624 = cljs.core.next(arglist__25624);
var name = cljs.core.first(arglist__25624);
var value = cljs.core.rest(arglist__25624);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25629_25633 = cljs.core.seq(domina.nodes(content));var chunk__25630_25634 = null;var count__25631_25635 = 0;var i__25632_25636 = 0;while(true){
if((i__25632_25636 < count__25631_25635))
{var n_25637 = chunk__25630_25634.cljs$core$IIndexed$_nth$arity$2(null,i__25632_25636);n_25637.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25638 = seq__25629_25633;
var G__25639 = chunk__25630_25634;
var G__25640 = count__25631_25635;
var G__25641 = (i__25632_25636 + 1);
seq__25629_25633 = G__25638;
chunk__25630_25634 = G__25639;
count__25631_25635 = G__25640;
i__25632_25636 = G__25641;
continue;
}
} else
{var temp__4092__auto___25642 = cljs.core.seq(seq__25629_25633);if(temp__4092__auto___25642)
{var seq__25629_25643__$1 = temp__4092__auto___25642;if(cljs.core.chunked_seq_QMARK_(seq__25629_25643__$1))
{var c__4148__auto___25644 = cljs.core.chunk_first(seq__25629_25643__$1);{
var G__25645 = cljs.core.chunk_rest(seq__25629_25643__$1);
var G__25646 = c__4148__auto___25644;
var G__25647 = cljs.core.count(c__4148__auto___25644);
var G__25648 = 0;
seq__25629_25633 = G__25645;
chunk__25630_25634 = G__25646;
count__25631_25635 = G__25647;
i__25632_25636 = G__25648;
continue;
}
} else
{var n_25649 = cljs.core.first(seq__25629_25643__$1);n_25649.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25650 = cljs.core.next(seq__25629_25643__$1);
var G__25651 = null;
var G__25652 = 0;
var G__25653 = 0;
seq__25629_25633 = G__25650;
chunk__25630_25634 = G__25651;
count__25631_25635 = G__25652;
i__25632_25636 = G__25653;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25654){
var content = cljs.core.first(arglist__25654);
arglist__25654 = cljs.core.next(arglist__25654);
var name = cljs.core.first(arglist__25654);
var value = cljs.core.rest(arglist__25654);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25659_25663 = cljs.core.seq(domina.nodes(content));var chunk__25660_25664 = null;var count__25661_25665 = 0;var i__25662_25666 = 0;while(true){
if((i__25662_25666 < count__25661_25665))
{var n_25667 = chunk__25660_25664.cljs$core$IIndexed$_nth$arity$2(null,i__25662_25666);n_25667.removeAttribute(cljs.core.name(name));
{
var G__25668 = seq__25659_25663;
var G__25669 = chunk__25660_25664;
var G__25670 = count__25661_25665;
var G__25671 = (i__25662_25666 + 1);
seq__25659_25663 = G__25668;
chunk__25660_25664 = G__25669;
count__25661_25665 = G__25670;
i__25662_25666 = G__25671;
continue;
}
} else
{var temp__4092__auto___25672 = cljs.core.seq(seq__25659_25663);if(temp__4092__auto___25672)
{var seq__25659_25673__$1 = temp__4092__auto___25672;if(cljs.core.chunked_seq_QMARK_(seq__25659_25673__$1))
{var c__4148__auto___25674 = cljs.core.chunk_first(seq__25659_25673__$1);{
var G__25675 = cljs.core.chunk_rest(seq__25659_25673__$1);
var G__25676 = c__4148__auto___25674;
var G__25677 = cljs.core.count(c__4148__auto___25674);
var G__25678 = 0;
seq__25659_25663 = G__25675;
chunk__25660_25664 = G__25676;
count__25661_25665 = G__25677;
i__25662_25666 = G__25678;
continue;
}
} else
{var n_25679 = cljs.core.first(seq__25659_25673__$1);n_25679.removeAttribute(cljs.core.name(name));
{
var G__25680 = cljs.core.next(seq__25659_25673__$1);
var G__25681 = null;
var G__25682 = 0;
var G__25683 = 0;
seq__25659_25663 = G__25680;
chunk__25660_25664 = G__25681;
count__25661_25665 = G__25682;
i__25662_25666 = G__25683;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__25685 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25685,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25685,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$148)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25686_SHARP_){var attr = attrs__$1.item(p1__25686_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25693_25699 = cljs.core.seq(styles);var chunk__25694_25700 = null;var count__25695_25701 = 0;var i__25696_25702 = 0;while(true){
if((i__25696_25702 < count__25695_25701))
{var vec__25697_25703 = chunk__25694_25700.cljs$core$IIndexed$_nth$arity$2(null,i__25696_25702);var name_25704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25697_25703,0,null);var value_25705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25697_25703,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25704,cljs.core.array_seq([value_25705], 0));
{
var G__25706 = seq__25693_25699;
var G__25707 = chunk__25694_25700;
var G__25708 = count__25695_25701;
var G__25709 = (i__25696_25702 + 1);
seq__25693_25699 = G__25706;
chunk__25694_25700 = G__25707;
count__25695_25701 = G__25708;
i__25696_25702 = G__25709;
continue;
}
} else
{var temp__4092__auto___25710 = cljs.core.seq(seq__25693_25699);if(temp__4092__auto___25710)
{var seq__25693_25711__$1 = temp__4092__auto___25710;if(cljs.core.chunked_seq_QMARK_(seq__25693_25711__$1))
{var c__4148__auto___25712 = cljs.core.chunk_first(seq__25693_25711__$1);{
var G__25713 = cljs.core.chunk_rest(seq__25693_25711__$1);
var G__25714 = c__4148__auto___25712;
var G__25715 = cljs.core.count(c__4148__auto___25712);
var G__25716 = 0;
seq__25693_25699 = G__25713;
chunk__25694_25700 = G__25714;
count__25695_25701 = G__25715;
i__25696_25702 = G__25716;
continue;
}
} else
{var vec__25698_25717 = cljs.core.first(seq__25693_25711__$1);var name_25718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25698_25717,0,null);var value_25719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25698_25717,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25718,cljs.core.array_seq([value_25719], 0));
{
var G__25720 = cljs.core.next(seq__25693_25711__$1);
var G__25721 = null;
var G__25722 = 0;
var G__25723 = 0;
seq__25693_25699 = G__25720;
chunk__25694_25700 = G__25721;
count__25695_25701 = G__25722;
i__25696_25702 = G__25723;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__25730_25736 = cljs.core.seq(attrs);var chunk__25731_25737 = null;var count__25732_25738 = 0;var i__25733_25739 = 0;while(true){
if((i__25733_25739 < count__25732_25738))
{var vec__25734_25740 = chunk__25731_25737.cljs$core$IIndexed$_nth$arity$2(null,i__25733_25739);var name_25741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25734_25740,0,null);var value_25742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25734_25740,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25741,cljs.core.array_seq([value_25742], 0));
{
var G__25743 = seq__25730_25736;
var G__25744 = chunk__25731_25737;
var G__25745 = count__25732_25738;
var G__25746 = (i__25733_25739 + 1);
seq__25730_25736 = G__25743;
chunk__25731_25737 = G__25744;
count__25732_25738 = G__25745;
i__25733_25739 = G__25746;
continue;
}
} else
{var temp__4092__auto___25747 = cljs.core.seq(seq__25730_25736);if(temp__4092__auto___25747)
{var seq__25730_25748__$1 = temp__4092__auto___25747;if(cljs.core.chunked_seq_QMARK_(seq__25730_25748__$1))
{var c__4148__auto___25749 = cljs.core.chunk_first(seq__25730_25748__$1);{
var G__25750 = cljs.core.chunk_rest(seq__25730_25748__$1);
var G__25751 = c__4148__auto___25749;
var G__25752 = cljs.core.count(c__4148__auto___25749);
var G__25753 = 0;
seq__25730_25736 = G__25750;
chunk__25731_25737 = G__25751;
count__25732_25738 = G__25752;
i__25733_25739 = G__25753;
continue;
}
} else
{var vec__25735_25754 = cljs.core.first(seq__25730_25748__$1);var name_25755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25735_25754,0,null);var value_25756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25735_25754,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25755,cljs.core.array_seq([value_25756], 0));
{
var G__25757 = cljs.core.next(seq__25730_25748__$1);
var G__25758 = null;
var G__25759 = 0;
var G__25760 = 0;
seq__25730_25736 = G__25757;
chunk__25731_25737 = G__25758;
count__25732_25738 = G__25759;
i__25733_25739 = G__25760;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__25765_25769 = cljs.core.seq(domina.nodes(content));var chunk__25766_25770 = null;var count__25767_25771 = 0;var i__25768_25772 = 0;while(true){
if((i__25768_25772 < count__25767_25771))
{var node_25773 = chunk__25766_25770.cljs$core$IIndexed$_nth$arity$2(null,i__25768_25772);goog.dom.classes.add(node_25773,class$);
{
var G__25774 = seq__25765_25769;
var G__25775 = chunk__25766_25770;
var G__25776 = count__25767_25771;
var G__25777 = (i__25768_25772 + 1);
seq__25765_25769 = G__25774;
chunk__25766_25770 = G__25775;
count__25767_25771 = G__25776;
i__25768_25772 = G__25777;
continue;
}
} else
{var temp__4092__auto___25778 = cljs.core.seq(seq__25765_25769);if(temp__4092__auto___25778)
{var seq__25765_25779__$1 = temp__4092__auto___25778;if(cljs.core.chunked_seq_QMARK_(seq__25765_25779__$1))
{var c__4148__auto___25780 = cljs.core.chunk_first(seq__25765_25779__$1);{
var G__25781 = cljs.core.chunk_rest(seq__25765_25779__$1);
var G__25782 = c__4148__auto___25780;
var G__25783 = cljs.core.count(c__4148__auto___25780);
var G__25784 = 0;
seq__25765_25769 = G__25781;
chunk__25766_25770 = G__25782;
count__25767_25771 = G__25783;
i__25768_25772 = G__25784;
continue;
}
} else
{var node_25785 = cljs.core.first(seq__25765_25779__$1);goog.dom.classes.add(node_25785,class$);
{
var G__25786 = cljs.core.next(seq__25765_25779__$1);
var G__25787 = null;
var G__25788 = 0;
var G__25789 = 0;
seq__25765_25769 = G__25786;
chunk__25766_25770 = G__25787;
count__25767_25771 = G__25788;
i__25768_25772 = G__25789;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25794_25798 = cljs.core.seq(domina.nodes(content));var chunk__25795_25799 = null;var count__25796_25800 = 0;var i__25797_25801 = 0;while(true){
if((i__25797_25801 < count__25796_25800))
{var node_25802 = chunk__25795_25799.cljs$core$IIndexed$_nth$arity$2(null,i__25797_25801);goog.dom.classes.remove(node_25802,class$);
{
var G__25803 = seq__25794_25798;
var G__25804 = chunk__25795_25799;
var G__25805 = count__25796_25800;
var G__25806 = (i__25797_25801 + 1);
seq__25794_25798 = G__25803;
chunk__25795_25799 = G__25804;
count__25796_25800 = G__25805;
i__25797_25801 = G__25806;
continue;
}
} else
{var temp__4092__auto___25807 = cljs.core.seq(seq__25794_25798);if(temp__4092__auto___25807)
{var seq__25794_25808__$1 = temp__4092__auto___25807;if(cljs.core.chunked_seq_QMARK_(seq__25794_25808__$1))
{var c__4148__auto___25809 = cljs.core.chunk_first(seq__25794_25808__$1);{
var G__25810 = cljs.core.chunk_rest(seq__25794_25808__$1);
var G__25811 = c__4148__auto___25809;
var G__25812 = cljs.core.count(c__4148__auto___25809);
var G__25813 = 0;
seq__25794_25798 = G__25810;
chunk__25795_25799 = G__25811;
count__25796_25800 = G__25812;
i__25797_25801 = G__25813;
continue;
}
} else
{var node_25814 = cljs.core.first(seq__25794_25808__$1);goog.dom.classes.remove(node_25814,class$);
{
var G__25815 = cljs.core.next(seq__25794_25808__$1);
var G__25816 = null;
var G__25817 = 0;
var G__25818 = 0;
seq__25794_25798 = G__25815;
chunk__25795_25799 = G__25816;
count__25796_25800 = G__25817;
i__25797_25801 = G__25818;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25823_25827 = cljs.core.seq(domina.nodes(content));var chunk__25824_25828 = null;var count__25825_25829 = 0;var i__25826_25830 = 0;while(true){
if((i__25826_25830 < count__25825_25829))
{var node_25831 = chunk__25824_25828.cljs$core$IIndexed$_nth$arity$2(null,i__25826_25830);goog.dom.classes.toggle(node_25831,class$);
{
var G__25832 = seq__25823_25827;
var G__25833 = chunk__25824_25828;
var G__25834 = count__25825_25829;
var G__25835 = (i__25826_25830 + 1);
seq__25823_25827 = G__25832;
chunk__25824_25828 = G__25833;
count__25825_25829 = G__25834;
i__25826_25830 = G__25835;
continue;
}
} else
{var temp__4092__auto___25836 = cljs.core.seq(seq__25823_25827);if(temp__4092__auto___25836)
{var seq__25823_25837__$1 = temp__4092__auto___25836;if(cljs.core.chunked_seq_QMARK_(seq__25823_25837__$1))
{var c__4148__auto___25838 = cljs.core.chunk_first(seq__25823_25837__$1);{
var G__25839 = cljs.core.chunk_rest(seq__25823_25837__$1);
var G__25840 = c__4148__auto___25838;
var G__25841 = cljs.core.count(c__4148__auto___25838);
var G__25842 = 0;
seq__25823_25827 = G__25839;
chunk__25824_25828 = G__25840;
count__25825_25829 = G__25841;
i__25826_25830 = G__25842;
continue;
}
} else
{var node_25843 = cljs.core.first(seq__25823_25837__$1);goog.dom.classes.toggle(node_25843,class$);
{
var G__25844 = cljs.core.next(seq__25823_25837__$1);
var G__25845 = null;
var G__25846 = 0;
var G__25847 = 0;
seq__25823_25827 = G__25844;
chunk__25824_25828 = G__25845;
count__25825_25829 = G__25846;
i__25826_25830 = G__25847;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25856__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__25852_25857 = cljs.core.seq(domina.nodes(content));var chunk__25853_25858 = null;var count__25854_25859 = 0;var i__25855_25860 = 0;while(true){
if((i__25855_25860 < count__25854_25859))
{var node_25861 = chunk__25853_25858.cljs$core$IIndexed$_nth$arity$2(null,i__25855_25860);goog.dom.classes.set(node_25861,classes_25856__$1);
{
var G__25862 = seq__25852_25857;
var G__25863 = chunk__25853_25858;
var G__25864 = count__25854_25859;
var G__25865 = (i__25855_25860 + 1);
seq__25852_25857 = G__25862;
chunk__25853_25858 = G__25863;
count__25854_25859 = G__25864;
i__25855_25860 = G__25865;
continue;
}
} else
{var temp__4092__auto___25866 = cljs.core.seq(seq__25852_25857);if(temp__4092__auto___25866)
{var seq__25852_25867__$1 = temp__4092__auto___25866;if(cljs.core.chunked_seq_QMARK_(seq__25852_25867__$1))
{var c__4148__auto___25868 = cljs.core.chunk_first(seq__25852_25867__$1);{
var G__25869 = cljs.core.chunk_rest(seq__25852_25867__$1);
var G__25870 = c__4148__auto___25868;
var G__25871 = cljs.core.count(c__4148__auto___25868);
var G__25872 = 0;
seq__25852_25857 = G__25869;
chunk__25853_25858 = G__25870;
count__25854_25859 = G__25871;
i__25855_25860 = G__25872;
continue;
}
} else
{var node_25873 = cljs.core.first(seq__25852_25867__$1);goog.dom.classes.set(node_25873,classes_25856__$1);
{
var G__25874 = cljs.core.next(seq__25852_25867__$1);
var G__25875 = null;
var G__25876 = 0;
var G__25877 = 0;
seq__25852_25857 = G__25874;
chunk__25853_25858 = G__25875;
count__25854_25859 = G__25876;
i__25855_25860 = G__25877;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25882_25886 = cljs.core.seq(domina.nodes(content));var chunk__25883_25887 = null;var count__25884_25888 = 0;var i__25885_25889 = 0;while(true){
if((i__25885_25889 < count__25884_25888))
{var node_25890 = chunk__25883_25887.cljs$core$IIndexed$_nth$arity$2(null,i__25885_25889);goog.dom.setTextContent(node_25890,value);
{
var G__25891 = seq__25882_25886;
var G__25892 = chunk__25883_25887;
var G__25893 = count__25884_25888;
var G__25894 = (i__25885_25889 + 1);
seq__25882_25886 = G__25891;
chunk__25883_25887 = G__25892;
count__25884_25888 = G__25893;
i__25885_25889 = G__25894;
continue;
}
} else
{var temp__4092__auto___25895 = cljs.core.seq(seq__25882_25886);if(temp__4092__auto___25895)
{var seq__25882_25896__$1 = temp__4092__auto___25895;if(cljs.core.chunked_seq_QMARK_(seq__25882_25896__$1))
{var c__4148__auto___25897 = cljs.core.chunk_first(seq__25882_25896__$1);{
var G__25898 = cljs.core.chunk_rest(seq__25882_25896__$1);
var G__25899 = c__4148__auto___25897;
var G__25900 = cljs.core.count(c__4148__auto___25897);
var G__25901 = 0;
seq__25882_25886 = G__25898;
chunk__25883_25887 = G__25899;
count__25884_25888 = G__25900;
i__25885_25889 = G__25901;
continue;
}
} else
{var node_25902 = cljs.core.first(seq__25882_25896__$1);goog.dom.setTextContent(node_25902,value);
{
var G__25903 = cljs.core.next(seq__25882_25896__$1);
var G__25904 = null;
var G__25905 = 0;
var G__25906 = 0;
seq__25882_25886 = G__25903;
chunk__25883_25887 = G__25904;
count__25884_25888 = G__25905;
i__25885_25889 = G__25906;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25911_25915 = cljs.core.seq(domina.nodes(content));var chunk__25912_25916 = null;var count__25913_25917 = 0;var i__25914_25918 = 0;while(true){
if((i__25914_25918 < count__25913_25917))
{var node_25919 = chunk__25912_25916.cljs$core$IIndexed$_nth$arity$2(null,i__25914_25918);goog.dom.forms.setValue(node_25919,value);
{
var G__25920 = seq__25911_25915;
var G__25921 = chunk__25912_25916;
var G__25922 = count__25913_25917;
var G__25923 = (i__25914_25918 + 1);
seq__25911_25915 = G__25920;
chunk__25912_25916 = G__25921;
count__25913_25917 = G__25922;
i__25914_25918 = G__25923;
continue;
}
} else
{var temp__4092__auto___25924 = cljs.core.seq(seq__25911_25915);if(temp__4092__auto___25924)
{var seq__25911_25925__$1 = temp__4092__auto___25924;if(cljs.core.chunked_seq_QMARK_(seq__25911_25925__$1))
{var c__4148__auto___25926 = cljs.core.chunk_first(seq__25911_25925__$1);{
var G__25927 = cljs.core.chunk_rest(seq__25911_25925__$1);
var G__25928 = c__4148__auto___25926;
var G__25929 = cljs.core.count(c__4148__auto___25926);
var G__25930 = 0;
seq__25911_25915 = G__25927;
chunk__25912_25916 = G__25928;
count__25913_25917 = G__25929;
i__25914_25918 = G__25930;
continue;
}
} else
{var node_25931 = cljs.core.first(seq__25911_25925__$1);goog.dom.forms.setValue(node_25931,value);
{
var G__25932 = cljs.core.next(seq__25911_25925__$1);
var G__25933 = null;
var G__25934 = 0;
var G__25935 = 0;
seq__25911_25915 = G__25932;
chunk__25912_25916 = G__25933;
count__25913_25917 = G__25934;
i__25914_25918 = G__25935;
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
{var value_25946 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25942_25947 = cljs.core.seq(domina.nodes(content));var chunk__25943_25948 = null;var count__25944_25949 = 0;var i__25945_25950 = 0;while(true){
if((i__25945_25950 < count__25944_25949))
{var node_25951 = chunk__25943_25948.cljs$core$IIndexed$_nth$arity$2(null,i__25945_25950);node_25951.innerHTML = value_25946;
{
var G__25952 = seq__25942_25947;
var G__25953 = chunk__25943_25948;
var G__25954 = count__25944_25949;
var G__25955 = (i__25945_25950 + 1);
seq__25942_25947 = G__25952;
chunk__25943_25948 = G__25953;
count__25944_25949 = G__25954;
i__25945_25950 = G__25955;
continue;
}
} else
{var temp__4092__auto___25956 = cljs.core.seq(seq__25942_25947);if(temp__4092__auto___25956)
{var seq__25942_25957__$1 = temp__4092__auto___25956;if(cljs.core.chunked_seq_QMARK_(seq__25942_25957__$1))
{var c__4148__auto___25958 = cljs.core.chunk_first(seq__25942_25957__$1);{
var G__25959 = cljs.core.chunk_rest(seq__25942_25957__$1);
var G__25960 = c__4148__auto___25958;
var G__25961 = cljs.core.count(c__4148__auto___25958);
var G__25962 = 0;
seq__25942_25947 = G__25959;
chunk__25943_25948 = G__25960;
count__25944_25949 = G__25961;
i__25945_25950 = G__25962;
continue;
}
} else
{var node_25963 = cljs.core.first(seq__25942_25957__$1);node_25963.innerHTML = value_25946;
{
var G__25964 = cljs.core.next(seq__25942_25957__$1);
var G__25965 = null;
var G__25966 = 0;
var G__25967 = 0;
seq__25942_25947 = G__25964;
chunk__25943_25948 = G__25965;
count__25944_25949 = G__25966;
i__25945_25950 = G__25967;
continue;
}
}
} else
{}
}
break;
}
}catch (e25941){if((e25941 instanceof Error))
{var e_25968 = e25941;domina.replace_children_BANG_(content,value_25946);
} else
{if(cljs.core.constant$keyword$148)
{throw e25941;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25975_25979 = cljs.core.seq(children);var chunk__25976_25980 = null;var count__25977_25981 = 0;var i__25978_25982 = 0;while(true){
if((i__25978_25982 < count__25977_25981))
{var child_25983 = chunk__25976_25980.cljs$core$IIndexed$_nth$arity$2(null,i__25978_25982);frag.appendChild(child_25983);
{
var G__25984 = seq__25975_25979;
var G__25985 = chunk__25976_25980;
var G__25986 = count__25977_25981;
var G__25987 = (i__25978_25982 + 1);
seq__25975_25979 = G__25984;
chunk__25976_25980 = G__25985;
count__25977_25981 = G__25986;
i__25978_25982 = G__25987;
continue;
}
} else
{var temp__4092__auto___25988 = cljs.core.seq(seq__25975_25979);if(temp__4092__auto___25988)
{var seq__25975_25989__$1 = temp__4092__auto___25988;if(cljs.core.chunked_seq_QMARK_(seq__25975_25989__$1))
{var c__4148__auto___25990 = cljs.core.chunk_first(seq__25975_25989__$1);{
var G__25991 = cljs.core.chunk_rest(seq__25975_25989__$1);
var G__25992 = c__4148__auto___25990;
var G__25993 = cljs.core.count(c__4148__auto___25990);
var G__25994 = 0;
seq__25975_25979 = G__25991;
chunk__25976_25980 = G__25992;
count__25977_25981 = G__25993;
i__25978_25982 = G__25994;
continue;
}
} else
{var child_25995 = cljs.core.first(seq__25975_25989__$1);frag.appendChild(child_25995);
{
var G__25996 = cljs.core.next(seq__25975_25989__$1);
var G__25997 = null;
var G__25998 = 0;
var G__25999 = 0;
seq__25975_25979 = G__25996;
chunk__25976_25980 = G__25997;
count__25977_25981 = G__25998;
i__25978_25982 = G__25999;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25969_SHARP_,p2__25970_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__25969_SHARP_,p2__25970_SHARP_) : f.call(null,p1__25969_SHARP_,p2__25970_SHARP_));
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
{if((function (){var G__26001 = list_thing;if(G__26001)
{var bit__4050__auto__ = (G__26001.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26001.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26001.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26001);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26001);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$149)
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
{if((function (){var G__26002 = content;if(G__26002)
{var bit__4050__auto__ = (G__26002.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26002.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26002.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26002);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26002);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$149)
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
{if((function (){var G__26003 = content;if(G__26003)
{var bit__4050__auto__ = (G__26003.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26003.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26003);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26003);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$149)
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
