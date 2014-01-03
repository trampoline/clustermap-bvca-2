// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_34648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_34649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_34650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$67,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_34649,table_section_wrapper_34649,opt_wrapper_34648,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_34650,table_section_wrapper_34649,cell_wrapper_34650,opt_wrapper_34648,table_section_wrapper_34649,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_34649]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__34655 = cljs.core.seq(tbody);var chunk__34656 = null;var count__34657 = 0;var i__34658 = 0;while(true){
if((i__34658 < count__34657))
{var child = chunk__34656.cljs$core$IIndexed$_nth$arity$2(null,i__34658);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34659 = seq__34655;
var G__34660 = chunk__34656;
var G__34661 = count__34657;
var G__34662 = (i__34658 + 1);
seq__34655 = G__34659;
chunk__34656 = G__34660;
count__34657 = G__34661;
i__34658 = G__34662;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34655);if(temp__4092__auto__)
{var seq__34655__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34655__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__34655__$1);{
var G__34663 = cljs.core.chunk_rest(seq__34655__$1);
var G__34664 = c__4015__auto__;
var G__34665 = cljs.core.count(c__4015__auto__);
var G__34666 = 0;
seq__34655 = G__34663;
chunk__34656 = G__34664;
count__34657 = G__34665;
i__34658 = G__34666;
continue;
}
} else
{var child = cljs.core.first(seq__34655__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34667 = cljs.core.next(seq__34655__$1);
var G__34668 = null;
var G__34669 = 0;
var G__34670 = 0;
seq__34655 = G__34667;
chunk__34656 = G__34668;
count__34657 = G__34669;
i__34658 = G__34670;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__34672 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__34673 = wrapper.lastChild;
var G__34674 = (level - 1);
wrapper = G__34673;
level = G__34674;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj34676 = {};return obj34676;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__34677){
var mesg = cljs.core.seq(arglist__34677);
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
log.cljs$lang$applyTo = (function (arglist__34678){
var mesg = cljs.core.seq(arglist__34678);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__34679){
var contents = cljs.core.seq(arglist__34679);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34680_SHARP_){return p1__34680_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__34681_SHARP_,p2__34682_SHARP_){return goog.dom.insertChildAt(p1__34681_SHARP_,p2__34682_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__34681_SHARP_,p2__34682_SHARP_){return goog.dom.insertChildAt(p1__34681_SHARP_,p2__34682_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__34684_SHARP_,p2__34683_SHARP_){return goog.dom.insertSiblingBefore(p2__34683_SHARP_,p1__34684_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__34684_SHARP_,p2__34683_SHARP_){return goog.dom.insertSiblingBefore(p2__34683_SHARP_,p1__34684_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__34686_SHARP_,p2__34685_SHARP_){return goog.dom.insertSiblingAfter(p2__34685_SHARP_,p1__34686_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__34686_SHARP_,p2__34685_SHARP_){return goog.dom.insertSiblingAfter(p2__34685_SHARP_,p1__34686_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__34688_SHARP_,p2__34687_SHARP_){return goog.dom.replaceNode(p2__34687_SHARP_,p1__34688_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__34688_SHARP_,p2__34687_SHARP_){return goog.dom.replaceNode(p2__34687_SHARP_,p1__34688_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__34693_34697 = cljs.core.seq(domina.nodes(content));var chunk__34694_34698 = null;var count__34695_34699 = 0;var i__34696_34700 = 0;while(true){
if((i__34696_34700 < count__34695_34699))
{var n_34701 = chunk__34694_34698.cljs$core$IIndexed$_nth$arity$2(null,i__34696_34700);goog.style.setStyle(n_34701,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__34702 = seq__34693_34697;
var G__34703 = chunk__34694_34698;
var G__34704 = count__34695_34699;
var G__34705 = (i__34696_34700 + 1);
seq__34693_34697 = G__34702;
chunk__34694_34698 = G__34703;
count__34695_34699 = G__34704;
i__34696_34700 = G__34705;
continue;
}
} else
{var temp__4092__auto___34706 = cljs.core.seq(seq__34693_34697);if(temp__4092__auto___34706)
{var seq__34693_34707__$1 = temp__4092__auto___34706;if(cljs.core.chunked_seq_QMARK_(seq__34693_34707__$1))
{var c__4015__auto___34708 = cljs.core.chunk_first(seq__34693_34707__$1);{
var G__34709 = cljs.core.chunk_rest(seq__34693_34707__$1);
var G__34710 = c__4015__auto___34708;
var G__34711 = cljs.core.count(c__4015__auto___34708);
var G__34712 = 0;
seq__34693_34697 = G__34709;
chunk__34694_34698 = G__34710;
count__34695_34699 = G__34711;
i__34696_34700 = G__34712;
continue;
}
} else
{var n_34713 = cljs.core.first(seq__34693_34707__$1);goog.style.setStyle(n_34713,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__34714 = cljs.core.next(seq__34693_34707__$1);
var G__34715 = null;
var G__34716 = 0;
var G__34717 = 0;
seq__34693_34697 = G__34714;
chunk__34694_34698 = G__34715;
count__34695_34699 = G__34716;
i__34696_34700 = G__34717;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__34718){
var content = cljs.core.first(arglist__34718);
arglist__34718 = cljs.core.next(arglist__34718);
var name = cljs.core.first(arglist__34718);
var value = cljs.core.rest(arglist__34718);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__34723_34727 = cljs.core.seq(domina.nodes(content));var chunk__34724_34728 = null;var count__34725_34729 = 0;var i__34726_34730 = 0;while(true){
if((i__34726_34730 < count__34725_34729))
{var n_34731 = chunk__34724_34728.cljs$core$IIndexed$_nth$arity$2(null,i__34726_34730);n_34731.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__34732 = seq__34723_34727;
var G__34733 = chunk__34724_34728;
var G__34734 = count__34725_34729;
var G__34735 = (i__34726_34730 + 1);
seq__34723_34727 = G__34732;
chunk__34724_34728 = G__34733;
count__34725_34729 = G__34734;
i__34726_34730 = G__34735;
continue;
}
} else
{var temp__4092__auto___34736 = cljs.core.seq(seq__34723_34727);if(temp__4092__auto___34736)
{var seq__34723_34737__$1 = temp__4092__auto___34736;if(cljs.core.chunked_seq_QMARK_(seq__34723_34737__$1))
{var c__4015__auto___34738 = cljs.core.chunk_first(seq__34723_34737__$1);{
var G__34739 = cljs.core.chunk_rest(seq__34723_34737__$1);
var G__34740 = c__4015__auto___34738;
var G__34741 = cljs.core.count(c__4015__auto___34738);
var G__34742 = 0;
seq__34723_34727 = G__34739;
chunk__34724_34728 = G__34740;
count__34725_34729 = G__34741;
i__34726_34730 = G__34742;
continue;
}
} else
{var n_34743 = cljs.core.first(seq__34723_34737__$1);n_34743.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__34744 = cljs.core.next(seq__34723_34737__$1);
var G__34745 = null;
var G__34746 = 0;
var G__34747 = 0;
seq__34723_34727 = G__34744;
chunk__34724_34728 = G__34745;
count__34725_34729 = G__34746;
i__34726_34730 = G__34747;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__34748){
var content = cljs.core.first(arglist__34748);
arglist__34748 = cljs.core.next(arglist__34748);
var name = cljs.core.first(arglist__34748);
var value = cljs.core.rest(arglist__34748);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__34753_34757 = cljs.core.seq(domina.nodes(content));var chunk__34754_34758 = null;var count__34755_34759 = 0;var i__34756_34760 = 0;while(true){
if((i__34756_34760 < count__34755_34759))
{var n_34761 = chunk__34754_34758.cljs$core$IIndexed$_nth$arity$2(null,i__34756_34760);n_34761.removeAttribute(cljs.core.name(name));
{
var G__34762 = seq__34753_34757;
var G__34763 = chunk__34754_34758;
var G__34764 = count__34755_34759;
var G__34765 = (i__34756_34760 + 1);
seq__34753_34757 = G__34762;
chunk__34754_34758 = G__34763;
count__34755_34759 = G__34764;
i__34756_34760 = G__34765;
continue;
}
} else
{var temp__4092__auto___34766 = cljs.core.seq(seq__34753_34757);if(temp__4092__auto___34766)
{var seq__34753_34767__$1 = temp__4092__auto___34766;if(cljs.core.chunked_seq_QMARK_(seq__34753_34767__$1))
{var c__4015__auto___34768 = cljs.core.chunk_first(seq__34753_34767__$1);{
var G__34769 = cljs.core.chunk_rest(seq__34753_34767__$1);
var G__34770 = c__4015__auto___34768;
var G__34771 = cljs.core.count(c__4015__auto___34768);
var G__34772 = 0;
seq__34753_34757 = G__34769;
chunk__34754_34758 = G__34770;
count__34755_34759 = G__34771;
i__34756_34760 = G__34772;
continue;
}
} else
{var n_34773 = cljs.core.first(seq__34753_34767__$1);n_34773.removeAttribute(cljs.core.name(name));
{
var G__34774 = cljs.core.next(seq__34753_34767__$1);
var G__34775 = null;
var G__34776 = 0;
var G__34777 = 0;
seq__34753_34757 = G__34774;
chunk__34754_34758 = G__34775;
count__34755_34759 = G__34776;
i__34756_34760 = G__34777;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__34779 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
{if(cljs.core.constant$keyword$66)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34780_SHARP_){var attr = attrs__$1.item(p1__34780_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__34787_34793 = cljs.core.seq(styles);var chunk__34788_34794 = null;var count__34789_34795 = 0;var i__34790_34796 = 0;while(true){
if((i__34790_34796 < count__34789_34795))
{var vec__34791_34797 = chunk__34788_34794.cljs$core$IIndexed$_nth$arity$2(null,i__34790_34796);var name_34798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791_34797,0,null);var value_34799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791_34797,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_34798,cljs.core.array_seq([value_34799], 0));
{
var G__34800 = seq__34787_34793;
var G__34801 = chunk__34788_34794;
var G__34802 = count__34789_34795;
var G__34803 = (i__34790_34796 + 1);
seq__34787_34793 = G__34800;
chunk__34788_34794 = G__34801;
count__34789_34795 = G__34802;
i__34790_34796 = G__34803;
continue;
}
} else
{var temp__4092__auto___34804 = cljs.core.seq(seq__34787_34793);if(temp__4092__auto___34804)
{var seq__34787_34805__$1 = temp__4092__auto___34804;if(cljs.core.chunked_seq_QMARK_(seq__34787_34805__$1))
{var c__4015__auto___34806 = cljs.core.chunk_first(seq__34787_34805__$1);{
var G__34807 = cljs.core.chunk_rest(seq__34787_34805__$1);
var G__34808 = c__4015__auto___34806;
var G__34809 = cljs.core.count(c__4015__auto___34806);
var G__34810 = 0;
seq__34787_34793 = G__34807;
chunk__34788_34794 = G__34808;
count__34789_34795 = G__34809;
i__34790_34796 = G__34810;
continue;
}
} else
{var vec__34792_34811 = cljs.core.first(seq__34787_34805__$1);var name_34812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_34811,0,null);var value_34813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_34811,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_34812,cljs.core.array_seq([value_34813], 0));
{
var G__34814 = cljs.core.next(seq__34787_34805__$1);
var G__34815 = null;
var G__34816 = 0;
var G__34817 = 0;
seq__34787_34793 = G__34814;
chunk__34788_34794 = G__34815;
count__34789_34795 = G__34816;
i__34790_34796 = G__34817;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__34824_34830 = cljs.core.seq(attrs);var chunk__34825_34831 = null;var count__34826_34832 = 0;var i__34827_34833 = 0;while(true){
if((i__34827_34833 < count__34826_34832))
{var vec__34828_34834 = chunk__34825_34831.cljs$core$IIndexed$_nth$arity$2(null,i__34827_34833);var name_34835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828_34834,0,null);var value_34836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34828_34834,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_34835,cljs.core.array_seq([value_34836], 0));
{
var G__34837 = seq__34824_34830;
var G__34838 = chunk__34825_34831;
var G__34839 = count__34826_34832;
var G__34840 = (i__34827_34833 + 1);
seq__34824_34830 = G__34837;
chunk__34825_34831 = G__34838;
count__34826_34832 = G__34839;
i__34827_34833 = G__34840;
continue;
}
} else
{var temp__4092__auto___34841 = cljs.core.seq(seq__34824_34830);if(temp__4092__auto___34841)
{var seq__34824_34842__$1 = temp__4092__auto___34841;if(cljs.core.chunked_seq_QMARK_(seq__34824_34842__$1))
{var c__4015__auto___34843 = cljs.core.chunk_first(seq__34824_34842__$1);{
var G__34844 = cljs.core.chunk_rest(seq__34824_34842__$1);
var G__34845 = c__4015__auto___34843;
var G__34846 = cljs.core.count(c__4015__auto___34843);
var G__34847 = 0;
seq__34824_34830 = G__34844;
chunk__34825_34831 = G__34845;
count__34826_34832 = G__34846;
i__34827_34833 = G__34847;
continue;
}
} else
{var vec__34829_34848 = cljs.core.first(seq__34824_34842__$1);var name_34849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829_34848,0,null);var value_34850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829_34848,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_34849,cljs.core.array_seq([value_34850], 0));
{
var G__34851 = cljs.core.next(seq__34824_34842__$1);
var G__34852 = null;
var G__34853 = 0;
var G__34854 = 0;
seq__34824_34830 = G__34851;
chunk__34825_34831 = G__34852;
count__34826_34832 = G__34853;
i__34827_34833 = G__34854;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__34859_34863 = cljs.core.seq(domina.nodes(content));var chunk__34860_34864 = null;var count__34861_34865 = 0;var i__34862_34866 = 0;while(true){
if((i__34862_34866 < count__34861_34865))
{var node_34867 = chunk__34860_34864.cljs$core$IIndexed$_nth$arity$2(null,i__34862_34866);goog.dom.classes.add(node_34867,class$);
{
var G__34868 = seq__34859_34863;
var G__34869 = chunk__34860_34864;
var G__34870 = count__34861_34865;
var G__34871 = (i__34862_34866 + 1);
seq__34859_34863 = G__34868;
chunk__34860_34864 = G__34869;
count__34861_34865 = G__34870;
i__34862_34866 = G__34871;
continue;
}
} else
{var temp__4092__auto___34872 = cljs.core.seq(seq__34859_34863);if(temp__4092__auto___34872)
{var seq__34859_34873__$1 = temp__4092__auto___34872;if(cljs.core.chunked_seq_QMARK_(seq__34859_34873__$1))
{var c__4015__auto___34874 = cljs.core.chunk_first(seq__34859_34873__$1);{
var G__34875 = cljs.core.chunk_rest(seq__34859_34873__$1);
var G__34876 = c__4015__auto___34874;
var G__34877 = cljs.core.count(c__4015__auto___34874);
var G__34878 = 0;
seq__34859_34863 = G__34875;
chunk__34860_34864 = G__34876;
count__34861_34865 = G__34877;
i__34862_34866 = G__34878;
continue;
}
} else
{var node_34879 = cljs.core.first(seq__34859_34873__$1);goog.dom.classes.add(node_34879,class$);
{
var G__34880 = cljs.core.next(seq__34859_34873__$1);
var G__34881 = null;
var G__34882 = 0;
var G__34883 = 0;
seq__34859_34863 = G__34880;
chunk__34860_34864 = G__34881;
count__34861_34865 = G__34882;
i__34862_34866 = G__34883;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__34888_34892 = cljs.core.seq(domina.nodes(content));var chunk__34889_34893 = null;var count__34890_34894 = 0;var i__34891_34895 = 0;while(true){
if((i__34891_34895 < count__34890_34894))
{var node_34896 = chunk__34889_34893.cljs$core$IIndexed$_nth$arity$2(null,i__34891_34895);goog.dom.classes.remove(node_34896,class$);
{
var G__34897 = seq__34888_34892;
var G__34898 = chunk__34889_34893;
var G__34899 = count__34890_34894;
var G__34900 = (i__34891_34895 + 1);
seq__34888_34892 = G__34897;
chunk__34889_34893 = G__34898;
count__34890_34894 = G__34899;
i__34891_34895 = G__34900;
continue;
}
} else
{var temp__4092__auto___34901 = cljs.core.seq(seq__34888_34892);if(temp__4092__auto___34901)
{var seq__34888_34902__$1 = temp__4092__auto___34901;if(cljs.core.chunked_seq_QMARK_(seq__34888_34902__$1))
{var c__4015__auto___34903 = cljs.core.chunk_first(seq__34888_34902__$1);{
var G__34904 = cljs.core.chunk_rest(seq__34888_34902__$1);
var G__34905 = c__4015__auto___34903;
var G__34906 = cljs.core.count(c__4015__auto___34903);
var G__34907 = 0;
seq__34888_34892 = G__34904;
chunk__34889_34893 = G__34905;
count__34890_34894 = G__34906;
i__34891_34895 = G__34907;
continue;
}
} else
{var node_34908 = cljs.core.first(seq__34888_34902__$1);goog.dom.classes.remove(node_34908,class$);
{
var G__34909 = cljs.core.next(seq__34888_34902__$1);
var G__34910 = null;
var G__34911 = 0;
var G__34912 = 0;
seq__34888_34892 = G__34909;
chunk__34889_34893 = G__34910;
count__34890_34894 = G__34911;
i__34891_34895 = G__34912;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__34917_34921 = cljs.core.seq(domina.nodes(content));var chunk__34918_34922 = null;var count__34919_34923 = 0;var i__34920_34924 = 0;while(true){
if((i__34920_34924 < count__34919_34923))
{var node_34925 = chunk__34918_34922.cljs$core$IIndexed$_nth$arity$2(null,i__34920_34924);goog.dom.classes.toggle(node_34925,class$);
{
var G__34926 = seq__34917_34921;
var G__34927 = chunk__34918_34922;
var G__34928 = count__34919_34923;
var G__34929 = (i__34920_34924 + 1);
seq__34917_34921 = G__34926;
chunk__34918_34922 = G__34927;
count__34919_34923 = G__34928;
i__34920_34924 = G__34929;
continue;
}
} else
{var temp__4092__auto___34930 = cljs.core.seq(seq__34917_34921);if(temp__4092__auto___34930)
{var seq__34917_34931__$1 = temp__4092__auto___34930;if(cljs.core.chunked_seq_QMARK_(seq__34917_34931__$1))
{var c__4015__auto___34932 = cljs.core.chunk_first(seq__34917_34931__$1);{
var G__34933 = cljs.core.chunk_rest(seq__34917_34931__$1);
var G__34934 = c__4015__auto___34932;
var G__34935 = cljs.core.count(c__4015__auto___34932);
var G__34936 = 0;
seq__34917_34921 = G__34933;
chunk__34918_34922 = G__34934;
count__34919_34923 = G__34935;
i__34920_34924 = G__34936;
continue;
}
} else
{var node_34937 = cljs.core.first(seq__34917_34931__$1);goog.dom.classes.toggle(node_34937,class$);
{
var G__34938 = cljs.core.next(seq__34917_34931__$1);
var G__34939 = null;
var G__34940 = 0;
var G__34941 = 0;
seq__34917_34921 = G__34938;
chunk__34918_34922 = G__34939;
count__34919_34923 = G__34940;
i__34920_34924 = G__34941;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_34950__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__34946_34951 = cljs.core.seq(domina.nodes(content));var chunk__34947_34952 = null;var count__34948_34953 = 0;var i__34949_34954 = 0;while(true){
if((i__34949_34954 < count__34948_34953))
{var node_34955 = chunk__34947_34952.cljs$core$IIndexed$_nth$arity$2(null,i__34949_34954);goog.dom.classes.set(node_34955,classes_34950__$1);
{
var G__34956 = seq__34946_34951;
var G__34957 = chunk__34947_34952;
var G__34958 = count__34948_34953;
var G__34959 = (i__34949_34954 + 1);
seq__34946_34951 = G__34956;
chunk__34947_34952 = G__34957;
count__34948_34953 = G__34958;
i__34949_34954 = G__34959;
continue;
}
} else
{var temp__4092__auto___34960 = cljs.core.seq(seq__34946_34951);if(temp__4092__auto___34960)
{var seq__34946_34961__$1 = temp__4092__auto___34960;if(cljs.core.chunked_seq_QMARK_(seq__34946_34961__$1))
{var c__4015__auto___34962 = cljs.core.chunk_first(seq__34946_34961__$1);{
var G__34963 = cljs.core.chunk_rest(seq__34946_34961__$1);
var G__34964 = c__4015__auto___34962;
var G__34965 = cljs.core.count(c__4015__auto___34962);
var G__34966 = 0;
seq__34946_34951 = G__34963;
chunk__34947_34952 = G__34964;
count__34948_34953 = G__34965;
i__34949_34954 = G__34966;
continue;
}
} else
{var node_34967 = cljs.core.first(seq__34946_34961__$1);goog.dom.classes.set(node_34967,classes_34950__$1);
{
var G__34968 = cljs.core.next(seq__34946_34961__$1);
var G__34969 = null;
var G__34970 = 0;
var G__34971 = 0;
seq__34946_34951 = G__34968;
chunk__34947_34952 = G__34969;
count__34948_34953 = G__34970;
i__34949_34954 = G__34971;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__34976_34980 = cljs.core.seq(domina.nodes(content));var chunk__34977_34981 = null;var count__34978_34982 = 0;var i__34979_34983 = 0;while(true){
if((i__34979_34983 < count__34978_34982))
{var node_34984 = chunk__34977_34981.cljs$core$IIndexed$_nth$arity$2(null,i__34979_34983);goog.dom.setTextContent(node_34984,value);
{
var G__34985 = seq__34976_34980;
var G__34986 = chunk__34977_34981;
var G__34987 = count__34978_34982;
var G__34988 = (i__34979_34983 + 1);
seq__34976_34980 = G__34985;
chunk__34977_34981 = G__34986;
count__34978_34982 = G__34987;
i__34979_34983 = G__34988;
continue;
}
} else
{var temp__4092__auto___34989 = cljs.core.seq(seq__34976_34980);if(temp__4092__auto___34989)
{var seq__34976_34990__$1 = temp__4092__auto___34989;if(cljs.core.chunked_seq_QMARK_(seq__34976_34990__$1))
{var c__4015__auto___34991 = cljs.core.chunk_first(seq__34976_34990__$1);{
var G__34992 = cljs.core.chunk_rest(seq__34976_34990__$1);
var G__34993 = c__4015__auto___34991;
var G__34994 = cljs.core.count(c__4015__auto___34991);
var G__34995 = 0;
seq__34976_34980 = G__34992;
chunk__34977_34981 = G__34993;
count__34978_34982 = G__34994;
i__34979_34983 = G__34995;
continue;
}
} else
{var node_34996 = cljs.core.first(seq__34976_34990__$1);goog.dom.setTextContent(node_34996,value);
{
var G__34997 = cljs.core.next(seq__34976_34990__$1);
var G__34998 = null;
var G__34999 = 0;
var G__35000 = 0;
seq__34976_34980 = G__34997;
chunk__34977_34981 = G__34998;
count__34978_34982 = G__34999;
i__34979_34983 = G__35000;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__35005_35009 = cljs.core.seq(domina.nodes(content));var chunk__35006_35010 = null;var count__35007_35011 = 0;var i__35008_35012 = 0;while(true){
if((i__35008_35012 < count__35007_35011))
{var node_35013 = chunk__35006_35010.cljs$core$IIndexed$_nth$arity$2(null,i__35008_35012);goog.dom.forms.setValue(node_35013,value);
{
var G__35014 = seq__35005_35009;
var G__35015 = chunk__35006_35010;
var G__35016 = count__35007_35011;
var G__35017 = (i__35008_35012 + 1);
seq__35005_35009 = G__35014;
chunk__35006_35010 = G__35015;
count__35007_35011 = G__35016;
i__35008_35012 = G__35017;
continue;
}
} else
{var temp__4092__auto___35018 = cljs.core.seq(seq__35005_35009);if(temp__4092__auto___35018)
{var seq__35005_35019__$1 = temp__4092__auto___35018;if(cljs.core.chunked_seq_QMARK_(seq__35005_35019__$1))
{var c__4015__auto___35020 = cljs.core.chunk_first(seq__35005_35019__$1);{
var G__35021 = cljs.core.chunk_rest(seq__35005_35019__$1);
var G__35022 = c__4015__auto___35020;
var G__35023 = cljs.core.count(c__4015__auto___35020);
var G__35024 = 0;
seq__35005_35009 = G__35021;
chunk__35006_35010 = G__35022;
count__35007_35011 = G__35023;
i__35008_35012 = G__35024;
continue;
}
} else
{var node_35025 = cljs.core.first(seq__35005_35019__$1);goog.dom.forms.setValue(node_35025,value);
{
var G__35026 = cljs.core.next(seq__35005_35019__$1);
var G__35027 = null;
var G__35028 = 0;
var G__35029 = 0;
seq__35005_35009 = G__35026;
chunk__35006_35010 = G__35027;
count__35007_35011 = G__35028;
i__35008_35012 = G__35029;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_35040 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__35036_35041 = cljs.core.seq(domina.nodes(content));var chunk__35037_35042 = null;var count__35038_35043 = 0;var i__35039_35044 = 0;while(true){
if((i__35039_35044 < count__35038_35043))
{var node_35045 = chunk__35037_35042.cljs$core$IIndexed$_nth$arity$2(null,i__35039_35044);node_35045.innerHTML = value_35040;
{
var G__35046 = seq__35036_35041;
var G__35047 = chunk__35037_35042;
var G__35048 = count__35038_35043;
var G__35049 = (i__35039_35044 + 1);
seq__35036_35041 = G__35046;
chunk__35037_35042 = G__35047;
count__35038_35043 = G__35048;
i__35039_35044 = G__35049;
continue;
}
} else
{var temp__4092__auto___35050 = cljs.core.seq(seq__35036_35041);if(temp__4092__auto___35050)
{var seq__35036_35051__$1 = temp__4092__auto___35050;if(cljs.core.chunked_seq_QMARK_(seq__35036_35051__$1))
{var c__4015__auto___35052 = cljs.core.chunk_first(seq__35036_35051__$1);{
var G__35053 = cljs.core.chunk_rest(seq__35036_35051__$1);
var G__35054 = c__4015__auto___35052;
var G__35055 = cljs.core.count(c__4015__auto___35052);
var G__35056 = 0;
seq__35036_35041 = G__35053;
chunk__35037_35042 = G__35054;
count__35038_35043 = G__35055;
i__35039_35044 = G__35056;
continue;
}
} else
{var node_35057 = cljs.core.first(seq__35036_35051__$1);node_35057.innerHTML = value_35040;
{
var G__35058 = cljs.core.next(seq__35036_35051__$1);
var G__35059 = null;
var G__35060 = 0;
var G__35061 = 0;
seq__35036_35041 = G__35058;
chunk__35037_35042 = G__35059;
count__35038_35043 = G__35060;
i__35039_35044 = G__35061;
continue;
}
}
} else
{}
}
break;
}
}catch (e35035){if((e35035 instanceof Error))
{var e_35062 = e35035;domina.replace_children_BANG_(content,value_35040);
} else
{if(cljs.core.constant$keyword$66)
{throw e35035;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__35069_35073 = cljs.core.seq(children);var chunk__35070_35074 = null;var count__35071_35075 = 0;var i__35072_35076 = 0;while(true){
if((i__35072_35076 < count__35071_35075))
{var child_35077 = chunk__35070_35074.cljs$core$IIndexed$_nth$arity$2(null,i__35072_35076);frag.appendChild(child_35077);
{
var G__35078 = seq__35069_35073;
var G__35079 = chunk__35070_35074;
var G__35080 = count__35071_35075;
var G__35081 = (i__35072_35076 + 1);
seq__35069_35073 = G__35078;
chunk__35070_35074 = G__35079;
count__35071_35075 = G__35080;
i__35072_35076 = G__35081;
continue;
}
} else
{var temp__4092__auto___35082 = cljs.core.seq(seq__35069_35073);if(temp__4092__auto___35082)
{var seq__35069_35083__$1 = temp__4092__auto___35082;if(cljs.core.chunked_seq_QMARK_(seq__35069_35083__$1))
{var c__4015__auto___35084 = cljs.core.chunk_first(seq__35069_35083__$1);{
var G__35085 = cljs.core.chunk_rest(seq__35069_35083__$1);
var G__35086 = c__4015__auto___35084;
var G__35087 = cljs.core.count(c__4015__auto___35084);
var G__35088 = 0;
seq__35069_35073 = G__35085;
chunk__35070_35074 = G__35086;
count__35071_35075 = G__35087;
i__35072_35076 = G__35088;
continue;
}
} else
{var child_35089 = cljs.core.first(seq__35069_35083__$1);frag.appendChild(child_35089);
{
var G__35090 = cljs.core.next(seq__35069_35083__$1);
var G__35091 = null;
var G__35092 = 0;
var G__35093 = 0;
seq__35069_35073 = G__35090;
chunk__35070_35074 = G__35091;
count__35071_35075 = G__35092;
i__35072_35076 = G__35093;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__35063_SHARP_,p2__35064_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__35063_SHARP_,p2__35064_SHARP_) : f.call(null,p1__35063_SHARP_,p2__35064_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not(obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__35095 = list_thing;if(G__35095)
{var bit__3917__auto__ = (G__35095.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__35095.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35095.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__35095);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__35095);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$67)
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
{if((function (){var G__35096 = content;if(G__35096)
{var bit__3917__auto__ = (G__35096.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__35096.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35096.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__35096);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__35096);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$67)
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
{if((function (){var G__35097 = content;if(G__35097)
{var bit__3917__auto__ = (G__35097.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__35097.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35097.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__35097);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__35097);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$67)
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
