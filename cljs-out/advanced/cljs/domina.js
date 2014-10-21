// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_51635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_51636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_51637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$1091,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_51637,opt_wrapper_51635,table_section_wrapper_51636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_51635,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_51636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_51636,cell_wrapper_51637,table_section_wrapper_51636,table_section_wrapper_51636]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__51642 = cljs.core.seq(tbody);var chunk__51643 = null;var count__51644 = (0);var i__51645 = (0);while(true){
if((i__51645 < count__51644))
{var child = chunk__51643.cljs$core$IIndexed$_nth$arity$2(null,i__51645);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51646 = seq__51642;
var G__51647 = chunk__51643;
var G__51648 = count__51644;
var G__51649 = (i__51645 + (1));
seq__51642 = G__51646;
chunk__51643 = G__51647;
count__51644 = G__51648;
i__51645 = G__51649;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__51642);if(temp__4126__auto__)
{var seq__51642__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__51642__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__51642__$1);{
var G__51650 = cljs.core.chunk_rest(seq__51642__$1);
var G__51651 = c__4314__auto__;
var G__51652 = cljs.core.count(c__4314__auto__);
var G__51653 = (0);
seq__51642 = G__51650;
chunk__51643 = G__51651;
count__51644 = G__51652;
i__51645 = G__51653;
continue;
}
} else
{var child = cljs.core.first(seq__51642__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51654 = cljs.core.next(seq__51642__$1);
var G__51655 = null;
var G__51656 = (0);
var G__51657 = (0);
seq__51642 = G__51654;
chunk__51643 = G__51655;
count__51644 = G__51656;
i__51645 = G__51657;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__51659 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$1091.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51659,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51659,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51659,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__51660 = wrapper.lastChild;
var G__51661 = (level - (1));
wrapper = G__51660;
level = G__51661;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj51663 = {};return obj51663;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__51664){
var mesg = cljs.core.seq(arglist__51664);
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
log.cljs$lang$applyTo = (function (arglist__51665){
var mesg = cljs.core.seq(arglist__51665);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__51666){
var contents = cljs.core.seq(arglist__51666);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51667_SHARP_){return p1__51667_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__51668_SHARP_,p2__51669_SHARP_){return goog.dom.insertChildAt(p1__51668_SHARP_,p2__51669_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__51668_SHARP_,p2__51669_SHARP_){return goog.dom.insertChildAt(p1__51668_SHARP_,p2__51669_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__51671_SHARP_,p2__51670_SHARP_){return goog.dom.insertSiblingBefore(p2__51670_SHARP_,p1__51671_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__51671_SHARP_,p2__51670_SHARP_){return goog.dom.insertSiblingBefore(p2__51670_SHARP_,p1__51671_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__51673_SHARP_,p2__51672_SHARP_){return goog.dom.insertSiblingAfter(p2__51672_SHARP_,p1__51673_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__51673_SHARP_,p2__51672_SHARP_){return goog.dom.insertSiblingAfter(p2__51672_SHARP_,p1__51673_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__51675_SHARP_,p2__51674_SHARP_){return goog.dom.replaceNode(p2__51674_SHARP_,p1__51675_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__51675_SHARP_,p2__51674_SHARP_){return goog.dom.replaceNode(p2__51674_SHARP_,p1__51675_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__51680_51684 = cljs.core.seq(domina.nodes(content));var chunk__51681_51685 = null;var count__51682_51686 = (0);var i__51683_51687 = (0);while(true){
if((i__51683_51687 < count__51682_51686))
{var n_51688 = chunk__51681_51685.cljs$core$IIndexed$_nth$arity$2(null,i__51683_51687);goog.style.setStyle(n_51688,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__51689 = seq__51680_51684;
var G__51690 = chunk__51681_51685;
var G__51691 = count__51682_51686;
var G__51692 = (i__51683_51687 + (1));
seq__51680_51684 = G__51689;
chunk__51681_51685 = G__51690;
count__51682_51686 = G__51691;
i__51683_51687 = G__51692;
continue;
}
} else
{var temp__4126__auto___51693 = cljs.core.seq(seq__51680_51684);if(temp__4126__auto___51693)
{var seq__51680_51694__$1 = temp__4126__auto___51693;if(cljs.core.chunked_seq_QMARK_(seq__51680_51694__$1))
{var c__4314__auto___51695 = cljs.core.chunk_first(seq__51680_51694__$1);{
var G__51696 = cljs.core.chunk_rest(seq__51680_51694__$1);
var G__51697 = c__4314__auto___51695;
var G__51698 = cljs.core.count(c__4314__auto___51695);
var G__51699 = (0);
seq__51680_51684 = G__51696;
chunk__51681_51685 = G__51697;
count__51682_51686 = G__51698;
i__51683_51687 = G__51699;
continue;
}
} else
{var n_51700 = cljs.core.first(seq__51680_51694__$1);goog.style.setStyle(n_51700,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__51701 = cljs.core.next(seq__51680_51694__$1);
var G__51702 = null;
var G__51703 = (0);
var G__51704 = (0);
seq__51680_51684 = G__51701;
chunk__51681_51685 = G__51702;
count__51682_51686 = G__51703;
i__51683_51687 = G__51704;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__51705){
var content = cljs.core.first(arglist__51705);
arglist__51705 = cljs.core.next(arglist__51705);
var name = cljs.core.first(arglist__51705);
var value = cljs.core.rest(arglist__51705);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__51710_51714 = cljs.core.seq(domina.nodes(content));var chunk__51711_51715 = null;var count__51712_51716 = (0);var i__51713_51717 = (0);while(true){
if((i__51713_51717 < count__51712_51716))
{var n_51718 = chunk__51711_51715.cljs$core$IIndexed$_nth$arity$2(null,i__51713_51717);n_51718.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__51719 = seq__51710_51714;
var G__51720 = chunk__51711_51715;
var G__51721 = count__51712_51716;
var G__51722 = (i__51713_51717 + (1));
seq__51710_51714 = G__51719;
chunk__51711_51715 = G__51720;
count__51712_51716 = G__51721;
i__51713_51717 = G__51722;
continue;
}
} else
{var temp__4126__auto___51723 = cljs.core.seq(seq__51710_51714);if(temp__4126__auto___51723)
{var seq__51710_51724__$1 = temp__4126__auto___51723;if(cljs.core.chunked_seq_QMARK_(seq__51710_51724__$1))
{var c__4314__auto___51725 = cljs.core.chunk_first(seq__51710_51724__$1);{
var G__51726 = cljs.core.chunk_rest(seq__51710_51724__$1);
var G__51727 = c__4314__auto___51725;
var G__51728 = cljs.core.count(c__4314__auto___51725);
var G__51729 = (0);
seq__51710_51714 = G__51726;
chunk__51711_51715 = G__51727;
count__51712_51716 = G__51728;
i__51713_51717 = G__51729;
continue;
}
} else
{var n_51730 = cljs.core.first(seq__51710_51724__$1);n_51730.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__51731 = cljs.core.next(seq__51710_51724__$1);
var G__51732 = null;
var G__51733 = (0);
var G__51734 = (0);
seq__51710_51714 = G__51731;
chunk__51711_51715 = G__51732;
count__51712_51716 = G__51733;
i__51713_51717 = G__51734;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__51735){
var content = cljs.core.first(arglist__51735);
arglist__51735 = cljs.core.next(arglist__51735);
var name = cljs.core.first(arglist__51735);
var value = cljs.core.rest(arglist__51735);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__51740_51744 = cljs.core.seq(domina.nodes(content));var chunk__51741_51745 = null;var count__51742_51746 = (0);var i__51743_51747 = (0);while(true){
if((i__51743_51747 < count__51742_51746))
{var n_51748 = chunk__51741_51745.cljs$core$IIndexed$_nth$arity$2(null,i__51743_51747);n_51748.removeAttribute(cljs.core.name(name));
{
var G__51749 = seq__51740_51744;
var G__51750 = chunk__51741_51745;
var G__51751 = count__51742_51746;
var G__51752 = (i__51743_51747 + (1));
seq__51740_51744 = G__51749;
chunk__51741_51745 = G__51750;
count__51742_51746 = G__51751;
i__51743_51747 = G__51752;
continue;
}
} else
{var temp__4126__auto___51753 = cljs.core.seq(seq__51740_51744);if(temp__4126__auto___51753)
{var seq__51740_51754__$1 = temp__4126__auto___51753;if(cljs.core.chunked_seq_QMARK_(seq__51740_51754__$1))
{var c__4314__auto___51755 = cljs.core.chunk_first(seq__51740_51754__$1);{
var G__51756 = cljs.core.chunk_rest(seq__51740_51754__$1);
var G__51757 = c__4314__auto___51755;
var G__51758 = cljs.core.count(c__4314__auto___51755);
var G__51759 = (0);
seq__51740_51744 = G__51756;
chunk__51741_51745 = G__51757;
count__51742_51746 = G__51758;
i__51743_51747 = G__51759;
continue;
}
} else
{var n_51760 = cljs.core.first(seq__51740_51754__$1);n_51760.removeAttribute(cljs.core.name(name));
{
var G__51761 = cljs.core.next(seq__51740_51754__$1);
var G__51762 = null;
var G__51763 = (0);
var G__51764 = (0);
seq__51740_51744 = G__51761;
chunk__51741_51745 = G__51762;
count__51742_51746 = G__51763;
i__51743_51747 = G__51764;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__51766 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__51767_SHARP_){var attr = attrs__$1.item(p1__51767_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__51774_51780 = cljs.core.seq(styles);var chunk__51775_51781 = null;var count__51776_51782 = (0);var i__51777_51783 = (0);while(true){
if((i__51777_51783 < count__51776_51782))
{var vec__51778_51784 = chunk__51775_51781.cljs$core$IIndexed$_nth$arity$2(null,i__51777_51783);var name_51785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778_51784,(0),null);var value_51786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778_51784,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_51785,cljs.core.array_seq([value_51786], 0));
{
var G__51787 = seq__51774_51780;
var G__51788 = chunk__51775_51781;
var G__51789 = count__51776_51782;
var G__51790 = (i__51777_51783 + (1));
seq__51774_51780 = G__51787;
chunk__51775_51781 = G__51788;
count__51776_51782 = G__51789;
i__51777_51783 = G__51790;
continue;
}
} else
{var temp__4126__auto___51791 = cljs.core.seq(seq__51774_51780);if(temp__4126__auto___51791)
{var seq__51774_51792__$1 = temp__4126__auto___51791;if(cljs.core.chunked_seq_QMARK_(seq__51774_51792__$1))
{var c__4314__auto___51793 = cljs.core.chunk_first(seq__51774_51792__$1);{
var G__51794 = cljs.core.chunk_rest(seq__51774_51792__$1);
var G__51795 = c__4314__auto___51793;
var G__51796 = cljs.core.count(c__4314__auto___51793);
var G__51797 = (0);
seq__51774_51780 = G__51794;
chunk__51775_51781 = G__51795;
count__51776_51782 = G__51796;
i__51777_51783 = G__51797;
continue;
}
} else
{var vec__51779_51798 = cljs.core.first(seq__51774_51792__$1);var name_51799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779_51798,(0),null);var value_51800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779_51798,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_51799,cljs.core.array_seq([value_51800], 0));
{
var G__51801 = cljs.core.next(seq__51774_51792__$1);
var G__51802 = null;
var G__51803 = (0);
var G__51804 = (0);
seq__51774_51780 = G__51801;
chunk__51775_51781 = G__51802;
count__51776_51782 = G__51803;
i__51777_51783 = G__51804;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__51811_51817 = cljs.core.seq(attrs);var chunk__51812_51818 = null;var count__51813_51819 = (0);var i__51814_51820 = (0);while(true){
if((i__51814_51820 < count__51813_51819))
{var vec__51815_51821 = chunk__51812_51818.cljs$core$IIndexed$_nth$arity$2(null,i__51814_51820);var name_51822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815_51821,(0),null);var value_51823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815_51821,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_51822,cljs.core.array_seq([value_51823], 0));
{
var G__51824 = seq__51811_51817;
var G__51825 = chunk__51812_51818;
var G__51826 = count__51813_51819;
var G__51827 = (i__51814_51820 + (1));
seq__51811_51817 = G__51824;
chunk__51812_51818 = G__51825;
count__51813_51819 = G__51826;
i__51814_51820 = G__51827;
continue;
}
} else
{var temp__4126__auto___51828 = cljs.core.seq(seq__51811_51817);if(temp__4126__auto___51828)
{var seq__51811_51829__$1 = temp__4126__auto___51828;if(cljs.core.chunked_seq_QMARK_(seq__51811_51829__$1))
{var c__4314__auto___51830 = cljs.core.chunk_first(seq__51811_51829__$1);{
var G__51831 = cljs.core.chunk_rest(seq__51811_51829__$1);
var G__51832 = c__4314__auto___51830;
var G__51833 = cljs.core.count(c__4314__auto___51830);
var G__51834 = (0);
seq__51811_51817 = G__51831;
chunk__51812_51818 = G__51832;
count__51813_51819 = G__51833;
i__51814_51820 = G__51834;
continue;
}
} else
{var vec__51816_51835 = cljs.core.first(seq__51811_51829__$1);var name_51836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51816_51835,(0),null);var value_51837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51816_51835,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_51836,cljs.core.array_seq([value_51837], 0));
{
var G__51838 = cljs.core.next(seq__51811_51829__$1);
var G__51839 = null;
var G__51840 = (0);
var G__51841 = (0);
seq__51811_51817 = G__51838;
chunk__51812_51818 = G__51839;
count__51813_51819 = G__51840;
i__51814_51820 = G__51841;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__51846_51850 = cljs.core.seq(domina.nodes(content));var chunk__51847_51851 = null;var count__51848_51852 = (0);var i__51849_51853 = (0);while(true){
if((i__51849_51853 < count__51848_51852))
{var node_51854 = chunk__51847_51851.cljs$core$IIndexed$_nth$arity$2(null,i__51849_51853);goog.dom.classes.add(node_51854,class$);
{
var G__51855 = seq__51846_51850;
var G__51856 = chunk__51847_51851;
var G__51857 = count__51848_51852;
var G__51858 = (i__51849_51853 + (1));
seq__51846_51850 = G__51855;
chunk__51847_51851 = G__51856;
count__51848_51852 = G__51857;
i__51849_51853 = G__51858;
continue;
}
} else
{var temp__4126__auto___51859 = cljs.core.seq(seq__51846_51850);if(temp__4126__auto___51859)
{var seq__51846_51860__$1 = temp__4126__auto___51859;if(cljs.core.chunked_seq_QMARK_(seq__51846_51860__$1))
{var c__4314__auto___51861 = cljs.core.chunk_first(seq__51846_51860__$1);{
var G__51862 = cljs.core.chunk_rest(seq__51846_51860__$1);
var G__51863 = c__4314__auto___51861;
var G__51864 = cljs.core.count(c__4314__auto___51861);
var G__51865 = (0);
seq__51846_51850 = G__51862;
chunk__51847_51851 = G__51863;
count__51848_51852 = G__51864;
i__51849_51853 = G__51865;
continue;
}
} else
{var node_51866 = cljs.core.first(seq__51846_51860__$1);goog.dom.classes.add(node_51866,class$);
{
var G__51867 = cljs.core.next(seq__51846_51860__$1);
var G__51868 = null;
var G__51869 = (0);
var G__51870 = (0);
seq__51846_51850 = G__51867;
chunk__51847_51851 = G__51868;
count__51848_51852 = G__51869;
i__51849_51853 = G__51870;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__51875_51879 = cljs.core.seq(domina.nodes(content));var chunk__51876_51880 = null;var count__51877_51881 = (0);var i__51878_51882 = (0);while(true){
if((i__51878_51882 < count__51877_51881))
{var node_51883 = chunk__51876_51880.cljs$core$IIndexed$_nth$arity$2(null,i__51878_51882);goog.dom.classes.remove(node_51883,class$);
{
var G__51884 = seq__51875_51879;
var G__51885 = chunk__51876_51880;
var G__51886 = count__51877_51881;
var G__51887 = (i__51878_51882 + (1));
seq__51875_51879 = G__51884;
chunk__51876_51880 = G__51885;
count__51877_51881 = G__51886;
i__51878_51882 = G__51887;
continue;
}
} else
{var temp__4126__auto___51888 = cljs.core.seq(seq__51875_51879);if(temp__4126__auto___51888)
{var seq__51875_51889__$1 = temp__4126__auto___51888;if(cljs.core.chunked_seq_QMARK_(seq__51875_51889__$1))
{var c__4314__auto___51890 = cljs.core.chunk_first(seq__51875_51889__$1);{
var G__51891 = cljs.core.chunk_rest(seq__51875_51889__$1);
var G__51892 = c__4314__auto___51890;
var G__51893 = cljs.core.count(c__4314__auto___51890);
var G__51894 = (0);
seq__51875_51879 = G__51891;
chunk__51876_51880 = G__51892;
count__51877_51881 = G__51893;
i__51878_51882 = G__51894;
continue;
}
} else
{var node_51895 = cljs.core.first(seq__51875_51889__$1);goog.dom.classes.remove(node_51895,class$);
{
var G__51896 = cljs.core.next(seq__51875_51889__$1);
var G__51897 = null;
var G__51898 = (0);
var G__51899 = (0);
seq__51875_51879 = G__51896;
chunk__51876_51880 = G__51897;
count__51877_51881 = G__51898;
i__51878_51882 = G__51899;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__51904_51908 = cljs.core.seq(domina.nodes(content));var chunk__51905_51909 = null;var count__51906_51910 = (0);var i__51907_51911 = (0);while(true){
if((i__51907_51911 < count__51906_51910))
{var node_51912 = chunk__51905_51909.cljs$core$IIndexed$_nth$arity$2(null,i__51907_51911);goog.dom.classes.toggle(node_51912,class$);
{
var G__51913 = seq__51904_51908;
var G__51914 = chunk__51905_51909;
var G__51915 = count__51906_51910;
var G__51916 = (i__51907_51911 + (1));
seq__51904_51908 = G__51913;
chunk__51905_51909 = G__51914;
count__51906_51910 = G__51915;
i__51907_51911 = G__51916;
continue;
}
} else
{var temp__4126__auto___51917 = cljs.core.seq(seq__51904_51908);if(temp__4126__auto___51917)
{var seq__51904_51918__$1 = temp__4126__auto___51917;if(cljs.core.chunked_seq_QMARK_(seq__51904_51918__$1))
{var c__4314__auto___51919 = cljs.core.chunk_first(seq__51904_51918__$1);{
var G__51920 = cljs.core.chunk_rest(seq__51904_51918__$1);
var G__51921 = c__4314__auto___51919;
var G__51922 = cljs.core.count(c__4314__auto___51919);
var G__51923 = (0);
seq__51904_51908 = G__51920;
chunk__51905_51909 = G__51921;
count__51906_51910 = G__51922;
i__51907_51911 = G__51923;
continue;
}
} else
{var node_51924 = cljs.core.first(seq__51904_51918__$1);goog.dom.classes.toggle(node_51924,class$);
{
var G__51925 = cljs.core.next(seq__51904_51918__$1);
var G__51926 = null;
var G__51927 = (0);
var G__51928 = (0);
seq__51904_51908 = G__51925;
chunk__51905_51909 = G__51926;
count__51906_51910 = G__51927;
i__51907_51911 = G__51928;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_51937__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__51933_51938 = cljs.core.seq(domina.nodes(content));var chunk__51934_51939 = null;var count__51935_51940 = (0);var i__51936_51941 = (0);while(true){
if((i__51936_51941 < count__51935_51940))
{var node_51942 = chunk__51934_51939.cljs$core$IIndexed$_nth$arity$2(null,i__51936_51941);goog.dom.classes.set(node_51942,classes_51937__$1);
{
var G__51943 = seq__51933_51938;
var G__51944 = chunk__51934_51939;
var G__51945 = count__51935_51940;
var G__51946 = (i__51936_51941 + (1));
seq__51933_51938 = G__51943;
chunk__51934_51939 = G__51944;
count__51935_51940 = G__51945;
i__51936_51941 = G__51946;
continue;
}
} else
{var temp__4126__auto___51947 = cljs.core.seq(seq__51933_51938);if(temp__4126__auto___51947)
{var seq__51933_51948__$1 = temp__4126__auto___51947;if(cljs.core.chunked_seq_QMARK_(seq__51933_51948__$1))
{var c__4314__auto___51949 = cljs.core.chunk_first(seq__51933_51948__$1);{
var G__51950 = cljs.core.chunk_rest(seq__51933_51948__$1);
var G__51951 = c__4314__auto___51949;
var G__51952 = cljs.core.count(c__4314__auto___51949);
var G__51953 = (0);
seq__51933_51938 = G__51950;
chunk__51934_51939 = G__51951;
count__51935_51940 = G__51952;
i__51936_51941 = G__51953;
continue;
}
} else
{var node_51954 = cljs.core.first(seq__51933_51948__$1);goog.dom.classes.set(node_51954,classes_51937__$1);
{
var G__51955 = cljs.core.next(seq__51933_51948__$1);
var G__51956 = null;
var G__51957 = (0);
var G__51958 = (0);
seq__51933_51938 = G__51955;
chunk__51934_51939 = G__51956;
count__51935_51940 = G__51957;
i__51936_51941 = G__51958;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__51963_51967 = cljs.core.seq(domina.nodes(content));var chunk__51964_51968 = null;var count__51965_51969 = (0);var i__51966_51970 = (0);while(true){
if((i__51966_51970 < count__51965_51969))
{var node_51971 = chunk__51964_51968.cljs$core$IIndexed$_nth$arity$2(null,i__51966_51970);goog.dom.setTextContent(node_51971,value);
{
var G__51972 = seq__51963_51967;
var G__51973 = chunk__51964_51968;
var G__51974 = count__51965_51969;
var G__51975 = (i__51966_51970 + (1));
seq__51963_51967 = G__51972;
chunk__51964_51968 = G__51973;
count__51965_51969 = G__51974;
i__51966_51970 = G__51975;
continue;
}
} else
{var temp__4126__auto___51976 = cljs.core.seq(seq__51963_51967);if(temp__4126__auto___51976)
{var seq__51963_51977__$1 = temp__4126__auto___51976;if(cljs.core.chunked_seq_QMARK_(seq__51963_51977__$1))
{var c__4314__auto___51978 = cljs.core.chunk_first(seq__51963_51977__$1);{
var G__51979 = cljs.core.chunk_rest(seq__51963_51977__$1);
var G__51980 = c__4314__auto___51978;
var G__51981 = cljs.core.count(c__4314__auto___51978);
var G__51982 = (0);
seq__51963_51967 = G__51979;
chunk__51964_51968 = G__51980;
count__51965_51969 = G__51981;
i__51966_51970 = G__51982;
continue;
}
} else
{var node_51983 = cljs.core.first(seq__51963_51977__$1);goog.dom.setTextContent(node_51983,value);
{
var G__51984 = cljs.core.next(seq__51963_51977__$1);
var G__51985 = null;
var G__51986 = (0);
var G__51987 = (0);
seq__51963_51967 = G__51984;
chunk__51964_51968 = G__51985;
count__51965_51969 = G__51986;
i__51966_51970 = G__51987;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__51992_51996 = cljs.core.seq(domina.nodes(content));var chunk__51993_51997 = null;var count__51994_51998 = (0);var i__51995_51999 = (0);while(true){
if((i__51995_51999 < count__51994_51998))
{var node_52000 = chunk__51993_51997.cljs$core$IIndexed$_nth$arity$2(null,i__51995_51999);goog.dom.forms.setValue(node_52000,value);
{
var G__52001 = seq__51992_51996;
var G__52002 = chunk__51993_51997;
var G__52003 = count__51994_51998;
var G__52004 = (i__51995_51999 + (1));
seq__51992_51996 = G__52001;
chunk__51993_51997 = G__52002;
count__51994_51998 = G__52003;
i__51995_51999 = G__52004;
continue;
}
} else
{var temp__4126__auto___52005 = cljs.core.seq(seq__51992_51996);if(temp__4126__auto___52005)
{var seq__51992_52006__$1 = temp__4126__auto___52005;if(cljs.core.chunked_seq_QMARK_(seq__51992_52006__$1))
{var c__4314__auto___52007 = cljs.core.chunk_first(seq__51992_52006__$1);{
var G__52008 = cljs.core.chunk_rest(seq__51992_52006__$1);
var G__52009 = c__4314__auto___52007;
var G__52010 = cljs.core.count(c__4314__auto___52007);
var G__52011 = (0);
seq__51992_51996 = G__52008;
chunk__51993_51997 = G__52009;
count__51994_51998 = G__52010;
i__51995_51999 = G__52011;
continue;
}
} else
{var node_52012 = cljs.core.first(seq__51992_52006__$1);goog.dom.forms.setValue(node_52012,value);
{
var G__52013 = cljs.core.next(seq__51992_52006__$1);
var G__52014 = null;
var G__52015 = (0);
var G__52016 = (0);
seq__51992_51996 = G__52013;
chunk__51993_51997 = G__52014;
count__51994_51998 = G__52015;
i__51995_51999 = G__52016;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_52027 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__52023_52028 = cljs.core.seq(domina.nodes(content));var chunk__52024_52029 = null;var count__52025_52030 = (0);var i__52026_52031 = (0);while(true){
if((i__52026_52031 < count__52025_52030))
{var node_52032 = chunk__52024_52029.cljs$core$IIndexed$_nth$arity$2(null,i__52026_52031);node_52032.innerHTML = value_52027;
{
var G__52033 = seq__52023_52028;
var G__52034 = chunk__52024_52029;
var G__52035 = count__52025_52030;
var G__52036 = (i__52026_52031 + (1));
seq__52023_52028 = G__52033;
chunk__52024_52029 = G__52034;
count__52025_52030 = G__52035;
i__52026_52031 = G__52036;
continue;
}
} else
{var temp__4126__auto___52037 = cljs.core.seq(seq__52023_52028);if(temp__4126__auto___52037)
{var seq__52023_52038__$1 = temp__4126__auto___52037;if(cljs.core.chunked_seq_QMARK_(seq__52023_52038__$1))
{var c__4314__auto___52039 = cljs.core.chunk_first(seq__52023_52038__$1);{
var G__52040 = cljs.core.chunk_rest(seq__52023_52038__$1);
var G__52041 = c__4314__auto___52039;
var G__52042 = cljs.core.count(c__4314__auto___52039);
var G__52043 = (0);
seq__52023_52028 = G__52040;
chunk__52024_52029 = G__52041;
count__52025_52030 = G__52042;
i__52026_52031 = G__52043;
continue;
}
} else
{var node_52044 = cljs.core.first(seq__52023_52038__$1);node_52044.innerHTML = value_52027;
{
var G__52045 = cljs.core.next(seq__52023_52038__$1);
var G__52046 = null;
var G__52047 = (0);
var G__52048 = (0);
seq__52023_52028 = G__52045;
chunk__52024_52029 = G__52046;
count__52025_52030 = G__52047;
i__52026_52031 = G__52048;
continue;
}
}
} else
{}
}
break;
}
}catch (e52022){if((e52022 instanceof Error))
{var e_52049 = e52022;domina.replace_children_BANG_(content,value_52027);
} else
{throw e52022;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__52056_52060 = cljs.core.seq(children);var chunk__52057_52061 = null;var count__52058_52062 = (0);var i__52059_52063 = (0);while(true){
if((i__52059_52063 < count__52058_52062))
{var child_52064 = chunk__52057_52061.cljs$core$IIndexed$_nth$arity$2(null,i__52059_52063);frag.appendChild(child_52064);
{
var G__52065 = seq__52056_52060;
var G__52066 = chunk__52057_52061;
var G__52067 = count__52058_52062;
var G__52068 = (i__52059_52063 + (1));
seq__52056_52060 = G__52065;
chunk__52057_52061 = G__52066;
count__52058_52062 = G__52067;
i__52059_52063 = G__52068;
continue;
}
} else
{var temp__4126__auto___52069 = cljs.core.seq(seq__52056_52060);if(temp__4126__auto___52069)
{var seq__52056_52070__$1 = temp__4126__auto___52069;if(cljs.core.chunked_seq_QMARK_(seq__52056_52070__$1))
{var c__4314__auto___52071 = cljs.core.chunk_first(seq__52056_52070__$1);{
var G__52072 = cljs.core.chunk_rest(seq__52056_52070__$1);
var G__52073 = c__4314__auto___52071;
var G__52074 = cljs.core.count(c__4314__auto___52071);
var G__52075 = (0);
seq__52056_52060 = G__52072;
chunk__52057_52061 = G__52073;
count__52058_52062 = G__52074;
i__52059_52063 = G__52075;
continue;
}
} else
{var child_52076 = cljs.core.first(seq__52056_52070__$1);frag.appendChild(child_52076);
{
var G__52077 = cljs.core.next(seq__52056_52070__$1);
var G__52078 = null;
var G__52079 = (0);
var G__52080 = (0);
seq__52056_52060 = G__52077;
chunk__52057_52061 = G__52078;
count__52058_52062 = G__52079;
i__52059_52063 = G__52080;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__52050_SHARP_,p2__52051_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__52050_SHARP_,p2__52051_SHARP_) : f.call(null,p1__52050_SHARP_,p2__52051_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__52082 = list_thing;if(G__52082)
{var bit__4208__auto__ = (G__52082.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__52082.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52082.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__52082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__52082);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__52083 = content;if(G__52083)
{var bit__4208__auto__ = (G__52083.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__52083.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52083.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__52083);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__52083);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__52084 = content;if(G__52084)
{var bit__4208__auto__ = (G__52084.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__52084.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52084.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__52084);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__52084);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{return content;

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
