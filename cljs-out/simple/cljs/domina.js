// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_19637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19638 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19639 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19639,opt_wrapper_19637,table_section_wrapper_19638,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19637,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19638,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19638,cell_wrapper_19639,table_section_wrapper_19638,table_section_wrapper_19638]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19644 = cljs.core.seq.call(null,tbody);var chunk__19645 = null;var count__19646 = (0);var i__19647 = (0);while(true){
if((i__19647 < count__19646))
{var child = cljs.core._nth.call(null,chunk__19645,i__19647);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19648 = seq__19644;
var G__19649 = chunk__19645;
var G__19650 = count__19646;
var G__19651 = (i__19647 + (1));
seq__19644 = G__19648;
chunk__19645 = G__19649;
count__19646 = G__19650;
i__19647 = G__19651;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19644);if(temp__4126__auto__)
{var seq__19644__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19644__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19644__$1);{
var G__19652 = cljs.core.chunk_rest.call(null,seq__19644__$1);
var G__19653 = c__4408__auto__;
var G__19654 = cljs.core.count.call(null,c__4408__auto__);
var G__19655 = (0);
seq__19644 = G__19652;
chunk__19645 = G__19653;
count__19646 = G__19654;
i__19647 = G__19655;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19644__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19656 = cljs.core.next.call(null,seq__19644__$1);
var G__19657 = null;
var G__19658 = (0);
var G__19659 = (0);
seq__19644 = G__19656;
chunk__19645 = G__19657;
count__19646 = G__19658;
i__19647 = G__19659;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19661 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19661,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19661,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19661,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19662 = wrapper.lastChild;
var G__19663 = (level - (1));
wrapper = G__19662;
level = G__19663;
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
if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3627__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3627__auto__;
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
domina.DomContent = (function (){var obj19665 = {};return obj19665;
})();
domina.nodes = (function nodes(content){if((function (){var and__3627__auto__ = content;if(and__3627__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3627__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4275__auto__ = (((content == null))?null:content);return (function (){var or__3639__auto__ = (domina.nodes[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.nodes["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3627__auto__ = nodeseq;if(and__3627__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3627__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4275__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3639__auto__ = (domina.single_node[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.single_node["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3627__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3627__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3627__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19666){
var mesg = cljs.core.seq(arglist__19666);
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
log.cljs$lang$applyTo = (function (arglist__19667){
var mesg = cljs.core.seq(arglist__19667);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19668){
var contents = cljs.core.seq(arglist__19668);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19669_SHARP_){return p1__19669_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19670_SHARP_,p2__19671_SHARP_){return goog.dom.insertChildAt(p1__19670_SHARP_,p2__19671_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19673_SHARP_,p2__19672_SHARP_){return goog.dom.insertSiblingBefore(p2__19672_SHARP_,p1__19673_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19675_SHARP_,p2__19674_SHARP_){return goog.dom.insertSiblingAfter(p2__19674_SHARP_,p1__19675_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19677_SHARP_,p2__19676_SHARP_){return goog.dom.replaceNode(p2__19676_SHARP_,p1__19677_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19682_19686 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19683_19687 = null;var count__19684_19688 = (0);var i__19685_19689 = (0);while(true){
if((i__19685_19689 < count__19684_19688))
{var n_19690 = cljs.core._nth.call(null,chunk__19683_19687,i__19685_19689);goog.style.setStyle(n_19690,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19691 = seq__19682_19686;
var G__19692 = chunk__19683_19687;
var G__19693 = count__19684_19688;
var G__19694 = (i__19685_19689 + (1));
seq__19682_19686 = G__19691;
chunk__19683_19687 = G__19692;
count__19684_19688 = G__19693;
i__19685_19689 = G__19694;
continue;
}
} else
{var temp__4126__auto___19695 = cljs.core.seq.call(null,seq__19682_19686);if(temp__4126__auto___19695)
{var seq__19682_19696__$1 = temp__4126__auto___19695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19682_19696__$1))
{var c__4408__auto___19697 = cljs.core.chunk_first.call(null,seq__19682_19696__$1);{
var G__19698 = cljs.core.chunk_rest.call(null,seq__19682_19696__$1);
var G__19699 = c__4408__auto___19697;
var G__19700 = cljs.core.count.call(null,c__4408__auto___19697);
var G__19701 = (0);
seq__19682_19686 = G__19698;
chunk__19683_19687 = G__19699;
count__19684_19688 = G__19700;
i__19685_19689 = G__19701;
continue;
}
} else
{var n_19702 = cljs.core.first.call(null,seq__19682_19696__$1);goog.style.setStyle(n_19702,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19703 = cljs.core.next.call(null,seq__19682_19696__$1);
var G__19704 = null;
var G__19705 = (0);
var G__19706 = (0);
seq__19682_19686 = G__19703;
chunk__19683_19687 = G__19704;
count__19684_19688 = G__19705;
i__19685_19689 = G__19706;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19707){
var content = cljs.core.first(arglist__19707);
arglist__19707 = cljs.core.next(arglist__19707);
var name = cljs.core.first(arglist__19707);
var value = cljs.core.rest(arglist__19707);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19712_19716 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19713_19717 = null;var count__19714_19718 = (0);var i__19715_19719 = (0);while(true){
if((i__19715_19719 < count__19714_19718))
{var n_19720 = cljs.core._nth.call(null,chunk__19713_19717,i__19715_19719);n_19720.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19721 = seq__19712_19716;
var G__19722 = chunk__19713_19717;
var G__19723 = count__19714_19718;
var G__19724 = (i__19715_19719 + (1));
seq__19712_19716 = G__19721;
chunk__19713_19717 = G__19722;
count__19714_19718 = G__19723;
i__19715_19719 = G__19724;
continue;
}
} else
{var temp__4126__auto___19725 = cljs.core.seq.call(null,seq__19712_19716);if(temp__4126__auto___19725)
{var seq__19712_19726__$1 = temp__4126__auto___19725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19712_19726__$1))
{var c__4408__auto___19727 = cljs.core.chunk_first.call(null,seq__19712_19726__$1);{
var G__19728 = cljs.core.chunk_rest.call(null,seq__19712_19726__$1);
var G__19729 = c__4408__auto___19727;
var G__19730 = cljs.core.count.call(null,c__4408__auto___19727);
var G__19731 = (0);
seq__19712_19716 = G__19728;
chunk__19713_19717 = G__19729;
count__19714_19718 = G__19730;
i__19715_19719 = G__19731;
continue;
}
} else
{var n_19732 = cljs.core.first.call(null,seq__19712_19726__$1);n_19732.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19733 = cljs.core.next.call(null,seq__19712_19726__$1);
var G__19734 = null;
var G__19735 = (0);
var G__19736 = (0);
seq__19712_19716 = G__19733;
chunk__19713_19717 = G__19734;
count__19714_19718 = G__19735;
i__19715_19719 = G__19736;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19737){
var content = cljs.core.first(arglist__19737);
arglist__19737 = cljs.core.next(arglist__19737);
var name = cljs.core.first(arglist__19737);
var value = cljs.core.rest(arglist__19737);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19742_19746 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19743_19747 = null;var count__19744_19748 = (0);var i__19745_19749 = (0);while(true){
if((i__19745_19749 < count__19744_19748))
{var n_19750 = cljs.core._nth.call(null,chunk__19743_19747,i__19745_19749);n_19750.removeAttribute(cljs.core.name.call(null,name));
{
var G__19751 = seq__19742_19746;
var G__19752 = chunk__19743_19747;
var G__19753 = count__19744_19748;
var G__19754 = (i__19745_19749 + (1));
seq__19742_19746 = G__19751;
chunk__19743_19747 = G__19752;
count__19744_19748 = G__19753;
i__19745_19749 = G__19754;
continue;
}
} else
{var temp__4126__auto___19755 = cljs.core.seq.call(null,seq__19742_19746);if(temp__4126__auto___19755)
{var seq__19742_19756__$1 = temp__4126__auto___19755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19742_19756__$1))
{var c__4408__auto___19757 = cljs.core.chunk_first.call(null,seq__19742_19756__$1);{
var G__19758 = cljs.core.chunk_rest.call(null,seq__19742_19756__$1);
var G__19759 = c__4408__auto___19757;
var G__19760 = cljs.core.count.call(null,c__4408__auto___19757);
var G__19761 = (0);
seq__19742_19746 = G__19758;
chunk__19743_19747 = G__19759;
count__19744_19748 = G__19760;
i__19745_19749 = G__19761;
continue;
}
} else
{var n_19762 = cljs.core.first.call(null,seq__19742_19756__$1);n_19762.removeAttribute(cljs.core.name.call(null,name));
{
var G__19763 = cljs.core.next.call(null,seq__19742_19756__$1);
var G__19764 = null;
var G__19765 = (0);
var G__19766 = (0);
seq__19742_19746 = G__19763;
chunk__19743_19747 = G__19764;
count__19744_19748 = G__19765;
i__19745_19749 = G__19766;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19768 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19768,(0),null);var v = cljs.core.nth.call(null,vec__19768,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{return v;
} else
{return and__3627__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19769_SHARP_){var attr = attrs__$1.item(p1__19769_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19776_19782 = cljs.core.seq.call(null,styles);var chunk__19777_19783 = null;var count__19778_19784 = (0);var i__19779_19785 = (0);while(true){
if((i__19779_19785 < count__19778_19784))
{var vec__19780_19786 = cljs.core._nth.call(null,chunk__19777_19783,i__19779_19785);var name_19787 = cljs.core.nth.call(null,vec__19780_19786,(0),null);var value_19788 = cljs.core.nth.call(null,vec__19780_19786,(1),null);domina.set_style_BANG_.call(null,content,name_19787,value_19788);
{
var G__19789 = seq__19776_19782;
var G__19790 = chunk__19777_19783;
var G__19791 = count__19778_19784;
var G__19792 = (i__19779_19785 + (1));
seq__19776_19782 = G__19789;
chunk__19777_19783 = G__19790;
count__19778_19784 = G__19791;
i__19779_19785 = G__19792;
continue;
}
} else
{var temp__4126__auto___19793 = cljs.core.seq.call(null,seq__19776_19782);if(temp__4126__auto___19793)
{var seq__19776_19794__$1 = temp__4126__auto___19793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19776_19794__$1))
{var c__4408__auto___19795 = cljs.core.chunk_first.call(null,seq__19776_19794__$1);{
var G__19796 = cljs.core.chunk_rest.call(null,seq__19776_19794__$1);
var G__19797 = c__4408__auto___19795;
var G__19798 = cljs.core.count.call(null,c__4408__auto___19795);
var G__19799 = (0);
seq__19776_19782 = G__19796;
chunk__19777_19783 = G__19797;
count__19778_19784 = G__19798;
i__19779_19785 = G__19799;
continue;
}
} else
{var vec__19781_19800 = cljs.core.first.call(null,seq__19776_19794__$1);var name_19801 = cljs.core.nth.call(null,vec__19781_19800,(0),null);var value_19802 = cljs.core.nth.call(null,vec__19781_19800,(1),null);domina.set_style_BANG_.call(null,content,name_19801,value_19802);
{
var G__19803 = cljs.core.next.call(null,seq__19776_19794__$1);
var G__19804 = null;
var G__19805 = (0);
var G__19806 = (0);
seq__19776_19782 = G__19803;
chunk__19777_19783 = G__19804;
count__19778_19784 = G__19805;
i__19779_19785 = G__19806;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19813_19819 = cljs.core.seq.call(null,attrs);var chunk__19814_19820 = null;var count__19815_19821 = (0);var i__19816_19822 = (0);while(true){
if((i__19816_19822 < count__19815_19821))
{var vec__19817_19823 = cljs.core._nth.call(null,chunk__19814_19820,i__19816_19822);var name_19824 = cljs.core.nth.call(null,vec__19817_19823,(0),null);var value_19825 = cljs.core.nth.call(null,vec__19817_19823,(1),null);domina.set_attr_BANG_.call(null,content,name_19824,value_19825);
{
var G__19826 = seq__19813_19819;
var G__19827 = chunk__19814_19820;
var G__19828 = count__19815_19821;
var G__19829 = (i__19816_19822 + (1));
seq__19813_19819 = G__19826;
chunk__19814_19820 = G__19827;
count__19815_19821 = G__19828;
i__19816_19822 = G__19829;
continue;
}
} else
{var temp__4126__auto___19830 = cljs.core.seq.call(null,seq__19813_19819);if(temp__4126__auto___19830)
{var seq__19813_19831__$1 = temp__4126__auto___19830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19813_19831__$1))
{var c__4408__auto___19832 = cljs.core.chunk_first.call(null,seq__19813_19831__$1);{
var G__19833 = cljs.core.chunk_rest.call(null,seq__19813_19831__$1);
var G__19834 = c__4408__auto___19832;
var G__19835 = cljs.core.count.call(null,c__4408__auto___19832);
var G__19836 = (0);
seq__19813_19819 = G__19833;
chunk__19814_19820 = G__19834;
count__19815_19821 = G__19835;
i__19816_19822 = G__19836;
continue;
}
} else
{var vec__19818_19837 = cljs.core.first.call(null,seq__19813_19831__$1);var name_19838 = cljs.core.nth.call(null,vec__19818_19837,(0),null);var value_19839 = cljs.core.nth.call(null,vec__19818_19837,(1),null);domina.set_attr_BANG_.call(null,content,name_19838,value_19839);
{
var G__19840 = cljs.core.next.call(null,seq__19813_19831__$1);
var G__19841 = null;
var G__19842 = (0);
var G__19843 = (0);
seq__19813_19819 = G__19840;
chunk__19814_19820 = G__19841;
count__19815_19821 = G__19842;
i__19816_19822 = G__19843;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19848_19852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19849_19853 = null;var count__19850_19854 = (0);var i__19851_19855 = (0);while(true){
if((i__19851_19855 < count__19850_19854))
{var node_19856 = cljs.core._nth.call(null,chunk__19849_19853,i__19851_19855);goog.dom.classes.add(node_19856,class$);
{
var G__19857 = seq__19848_19852;
var G__19858 = chunk__19849_19853;
var G__19859 = count__19850_19854;
var G__19860 = (i__19851_19855 + (1));
seq__19848_19852 = G__19857;
chunk__19849_19853 = G__19858;
count__19850_19854 = G__19859;
i__19851_19855 = G__19860;
continue;
}
} else
{var temp__4126__auto___19861 = cljs.core.seq.call(null,seq__19848_19852);if(temp__4126__auto___19861)
{var seq__19848_19862__$1 = temp__4126__auto___19861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19848_19862__$1))
{var c__4408__auto___19863 = cljs.core.chunk_first.call(null,seq__19848_19862__$1);{
var G__19864 = cljs.core.chunk_rest.call(null,seq__19848_19862__$1);
var G__19865 = c__4408__auto___19863;
var G__19866 = cljs.core.count.call(null,c__4408__auto___19863);
var G__19867 = (0);
seq__19848_19852 = G__19864;
chunk__19849_19853 = G__19865;
count__19850_19854 = G__19866;
i__19851_19855 = G__19867;
continue;
}
} else
{var node_19868 = cljs.core.first.call(null,seq__19848_19862__$1);goog.dom.classes.add(node_19868,class$);
{
var G__19869 = cljs.core.next.call(null,seq__19848_19862__$1);
var G__19870 = null;
var G__19871 = (0);
var G__19872 = (0);
seq__19848_19852 = G__19869;
chunk__19849_19853 = G__19870;
count__19850_19854 = G__19871;
i__19851_19855 = G__19872;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19877_19881 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19878_19882 = null;var count__19879_19883 = (0);var i__19880_19884 = (0);while(true){
if((i__19880_19884 < count__19879_19883))
{var node_19885 = cljs.core._nth.call(null,chunk__19878_19882,i__19880_19884);goog.dom.classes.remove(node_19885,class$);
{
var G__19886 = seq__19877_19881;
var G__19887 = chunk__19878_19882;
var G__19888 = count__19879_19883;
var G__19889 = (i__19880_19884 + (1));
seq__19877_19881 = G__19886;
chunk__19878_19882 = G__19887;
count__19879_19883 = G__19888;
i__19880_19884 = G__19889;
continue;
}
} else
{var temp__4126__auto___19890 = cljs.core.seq.call(null,seq__19877_19881);if(temp__4126__auto___19890)
{var seq__19877_19891__$1 = temp__4126__auto___19890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19877_19891__$1))
{var c__4408__auto___19892 = cljs.core.chunk_first.call(null,seq__19877_19891__$1);{
var G__19893 = cljs.core.chunk_rest.call(null,seq__19877_19891__$1);
var G__19894 = c__4408__auto___19892;
var G__19895 = cljs.core.count.call(null,c__4408__auto___19892);
var G__19896 = (0);
seq__19877_19881 = G__19893;
chunk__19878_19882 = G__19894;
count__19879_19883 = G__19895;
i__19880_19884 = G__19896;
continue;
}
} else
{var node_19897 = cljs.core.first.call(null,seq__19877_19891__$1);goog.dom.classes.remove(node_19897,class$);
{
var G__19898 = cljs.core.next.call(null,seq__19877_19891__$1);
var G__19899 = null;
var G__19900 = (0);
var G__19901 = (0);
seq__19877_19881 = G__19898;
chunk__19878_19882 = G__19899;
count__19879_19883 = G__19900;
i__19880_19884 = G__19901;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19906_19910 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19907_19911 = null;var count__19908_19912 = (0);var i__19909_19913 = (0);while(true){
if((i__19909_19913 < count__19908_19912))
{var node_19914 = cljs.core._nth.call(null,chunk__19907_19911,i__19909_19913);goog.dom.classes.toggle(node_19914,class$);
{
var G__19915 = seq__19906_19910;
var G__19916 = chunk__19907_19911;
var G__19917 = count__19908_19912;
var G__19918 = (i__19909_19913 + (1));
seq__19906_19910 = G__19915;
chunk__19907_19911 = G__19916;
count__19908_19912 = G__19917;
i__19909_19913 = G__19918;
continue;
}
} else
{var temp__4126__auto___19919 = cljs.core.seq.call(null,seq__19906_19910);if(temp__4126__auto___19919)
{var seq__19906_19920__$1 = temp__4126__auto___19919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19906_19920__$1))
{var c__4408__auto___19921 = cljs.core.chunk_first.call(null,seq__19906_19920__$1);{
var G__19922 = cljs.core.chunk_rest.call(null,seq__19906_19920__$1);
var G__19923 = c__4408__auto___19921;
var G__19924 = cljs.core.count.call(null,c__4408__auto___19921);
var G__19925 = (0);
seq__19906_19910 = G__19922;
chunk__19907_19911 = G__19923;
count__19908_19912 = G__19924;
i__19909_19913 = G__19925;
continue;
}
} else
{var node_19926 = cljs.core.first.call(null,seq__19906_19920__$1);goog.dom.classes.toggle(node_19926,class$);
{
var G__19927 = cljs.core.next.call(null,seq__19906_19920__$1);
var G__19928 = null;
var G__19929 = (0);
var G__19930 = (0);
seq__19906_19910 = G__19927;
chunk__19907_19911 = G__19928;
count__19908_19912 = G__19929;
i__19909_19913 = G__19930;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19939__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19935_19940 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19936_19941 = null;var count__19937_19942 = (0);var i__19938_19943 = (0);while(true){
if((i__19938_19943 < count__19937_19942))
{var node_19944 = cljs.core._nth.call(null,chunk__19936_19941,i__19938_19943);goog.dom.classes.set(node_19944,classes_19939__$1);
{
var G__19945 = seq__19935_19940;
var G__19946 = chunk__19936_19941;
var G__19947 = count__19937_19942;
var G__19948 = (i__19938_19943 + (1));
seq__19935_19940 = G__19945;
chunk__19936_19941 = G__19946;
count__19937_19942 = G__19947;
i__19938_19943 = G__19948;
continue;
}
} else
{var temp__4126__auto___19949 = cljs.core.seq.call(null,seq__19935_19940);if(temp__4126__auto___19949)
{var seq__19935_19950__$1 = temp__4126__auto___19949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19935_19950__$1))
{var c__4408__auto___19951 = cljs.core.chunk_first.call(null,seq__19935_19950__$1);{
var G__19952 = cljs.core.chunk_rest.call(null,seq__19935_19950__$1);
var G__19953 = c__4408__auto___19951;
var G__19954 = cljs.core.count.call(null,c__4408__auto___19951);
var G__19955 = (0);
seq__19935_19940 = G__19952;
chunk__19936_19941 = G__19953;
count__19937_19942 = G__19954;
i__19938_19943 = G__19955;
continue;
}
} else
{var node_19956 = cljs.core.first.call(null,seq__19935_19950__$1);goog.dom.classes.set(node_19956,classes_19939__$1);
{
var G__19957 = cljs.core.next.call(null,seq__19935_19950__$1);
var G__19958 = null;
var G__19959 = (0);
var G__19960 = (0);
seq__19935_19940 = G__19957;
chunk__19936_19941 = G__19958;
count__19937_19942 = G__19959;
i__19938_19943 = G__19960;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19965_19969 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19966_19970 = null;var count__19967_19971 = (0);var i__19968_19972 = (0);while(true){
if((i__19968_19972 < count__19967_19971))
{var node_19973 = cljs.core._nth.call(null,chunk__19966_19970,i__19968_19972);goog.dom.setTextContent(node_19973,value);
{
var G__19974 = seq__19965_19969;
var G__19975 = chunk__19966_19970;
var G__19976 = count__19967_19971;
var G__19977 = (i__19968_19972 + (1));
seq__19965_19969 = G__19974;
chunk__19966_19970 = G__19975;
count__19967_19971 = G__19976;
i__19968_19972 = G__19977;
continue;
}
} else
{var temp__4126__auto___19978 = cljs.core.seq.call(null,seq__19965_19969);if(temp__4126__auto___19978)
{var seq__19965_19979__$1 = temp__4126__auto___19978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19965_19979__$1))
{var c__4408__auto___19980 = cljs.core.chunk_first.call(null,seq__19965_19979__$1);{
var G__19981 = cljs.core.chunk_rest.call(null,seq__19965_19979__$1);
var G__19982 = c__4408__auto___19980;
var G__19983 = cljs.core.count.call(null,c__4408__auto___19980);
var G__19984 = (0);
seq__19965_19969 = G__19981;
chunk__19966_19970 = G__19982;
count__19967_19971 = G__19983;
i__19968_19972 = G__19984;
continue;
}
} else
{var node_19985 = cljs.core.first.call(null,seq__19965_19979__$1);goog.dom.setTextContent(node_19985,value);
{
var G__19986 = cljs.core.next.call(null,seq__19965_19979__$1);
var G__19987 = null;
var G__19988 = (0);
var G__19989 = (0);
seq__19965_19969 = G__19986;
chunk__19966_19970 = G__19987;
count__19967_19971 = G__19988;
i__19968_19972 = G__19989;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19994_19998 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19995_19999 = null;var count__19996_20000 = (0);var i__19997_20001 = (0);while(true){
if((i__19997_20001 < count__19996_20000))
{var node_20002 = cljs.core._nth.call(null,chunk__19995_19999,i__19997_20001);goog.dom.forms.setValue(node_20002,value);
{
var G__20003 = seq__19994_19998;
var G__20004 = chunk__19995_19999;
var G__20005 = count__19996_20000;
var G__20006 = (i__19997_20001 + (1));
seq__19994_19998 = G__20003;
chunk__19995_19999 = G__20004;
count__19996_20000 = G__20005;
i__19997_20001 = G__20006;
continue;
}
} else
{var temp__4126__auto___20007 = cljs.core.seq.call(null,seq__19994_19998);if(temp__4126__auto___20007)
{var seq__19994_20008__$1 = temp__4126__auto___20007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19994_20008__$1))
{var c__4408__auto___20009 = cljs.core.chunk_first.call(null,seq__19994_20008__$1);{
var G__20010 = cljs.core.chunk_rest.call(null,seq__19994_20008__$1);
var G__20011 = c__4408__auto___20009;
var G__20012 = cljs.core.count.call(null,c__4408__auto___20009);
var G__20013 = (0);
seq__19994_19998 = G__20010;
chunk__19995_19999 = G__20011;
count__19996_20000 = G__20012;
i__19997_20001 = G__20013;
continue;
}
} else
{var node_20014 = cljs.core.first.call(null,seq__19994_20008__$1);goog.dom.forms.setValue(node_20014,value);
{
var G__20015 = cljs.core.next.call(null,seq__19994_20008__$1);
var G__20016 = null;
var G__20017 = (0);
var G__20018 = (0);
seq__19994_19998 = G__20015;
chunk__19995_19999 = G__20016;
count__19996_20000 = G__20017;
i__19997_20001 = G__20018;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3627__auto__ = allows_inner_html_QMARK_;if(and__3627__auto__)
{var and__3627__auto____$1 = (function (){var or__3639__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3627__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var value_20029 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20025_20030 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20026_20031 = null;var count__20027_20032 = (0);var i__20028_20033 = (0);while(true){
if((i__20028_20033 < count__20027_20032))
{var node_20034 = cljs.core._nth.call(null,chunk__20026_20031,i__20028_20033);node_20034.innerHTML = value_20029;
{
var G__20035 = seq__20025_20030;
var G__20036 = chunk__20026_20031;
var G__20037 = count__20027_20032;
var G__20038 = (i__20028_20033 + (1));
seq__20025_20030 = G__20035;
chunk__20026_20031 = G__20036;
count__20027_20032 = G__20037;
i__20028_20033 = G__20038;
continue;
}
} else
{var temp__4126__auto___20039 = cljs.core.seq.call(null,seq__20025_20030);if(temp__4126__auto___20039)
{var seq__20025_20040__$1 = temp__4126__auto___20039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20025_20040__$1))
{var c__4408__auto___20041 = cljs.core.chunk_first.call(null,seq__20025_20040__$1);{
var G__20042 = cljs.core.chunk_rest.call(null,seq__20025_20040__$1);
var G__20043 = c__4408__auto___20041;
var G__20044 = cljs.core.count.call(null,c__4408__auto___20041);
var G__20045 = (0);
seq__20025_20030 = G__20042;
chunk__20026_20031 = G__20043;
count__20027_20032 = G__20044;
i__20028_20033 = G__20045;
continue;
}
} else
{var node_20046 = cljs.core.first.call(null,seq__20025_20040__$1);node_20046.innerHTML = value_20029;
{
var G__20047 = cljs.core.next.call(null,seq__20025_20040__$1);
var G__20048 = null;
var G__20049 = (0);
var G__20050 = (0);
seq__20025_20030 = G__20047;
chunk__20026_20031 = G__20048;
count__20027_20032 = G__20049;
i__20028_20033 = G__20050;
continue;
}
}
} else
{}
}
break;
}
}catch (e20024){if((e20024 instanceof Error))
{var e_20051 = e20024;domina.replace_children_BANG_.call(null,content,value_20029);
} else
{throw e20024;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3627__auto__ = bubble;if(cljs.core.truth_(and__3627__auto__))
{return (value == null);
} else
{return and__3627__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3639__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20058_20062 = cljs.core.seq.call(null,children);var chunk__20059_20063 = null;var count__20060_20064 = (0);var i__20061_20065 = (0);while(true){
if((i__20061_20065 < count__20060_20064))
{var child_20066 = cljs.core._nth.call(null,chunk__20059_20063,i__20061_20065);frag.appendChild(child_20066);
{
var G__20067 = seq__20058_20062;
var G__20068 = chunk__20059_20063;
var G__20069 = count__20060_20064;
var G__20070 = (i__20061_20065 + (1));
seq__20058_20062 = G__20067;
chunk__20059_20063 = G__20068;
count__20060_20064 = G__20069;
i__20061_20065 = G__20070;
continue;
}
} else
{var temp__4126__auto___20071 = cljs.core.seq.call(null,seq__20058_20062);if(temp__4126__auto___20071)
{var seq__20058_20072__$1 = temp__4126__auto___20071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20058_20072__$1))
{var c__4408__auto___20073 = cljs.core.chunk_first.call(null,seq__20058_20072__$1);{
var G__20074 = cljs.core.chunk_rest.call(null,seq__20058_20072__$1);
var G__20075 = c__4408__auto___20073;
var G__20076 = cljs.core.count.call(null,c__4408__auto___20073);
var G__20077 = (0);
seq__20058_20062 = G__20074;
chunk__20059_20063 = G__20075;
count__20060_20064 = G__20076;
i__20061_20065 = G__20077;
continue;
}
} else
{var child_20078 = cljs.core.first.call(null,seq__20058_20072__$1);frag.appendChild(child_20078);
{
var G__20079 = cljs.core.next.call(null,seq__20058_20072__$1);
var G__20080 = null;
var G__20081 = (0);
var G__20082 = (0);
seq__20058_20062 = G__20079;
chunk__20059_20063 = G__20080;
count__20060_20064 = G__20081;
i__20061_20065 = G__20082;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__20052_SHARP_,p2__20053_SHARP_){return f.call(null,p1__20052_SHARP_,p2__20053_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3627__auto__ = obj;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3627__auto____$1)
{return obj.length;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
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
{if((function (){var G__20084 = list_thing;if(G__20084)
{var bit__4302__auto__ = (G__20084.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20084.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20084.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20084);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20084);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20085 = content;if(G__20085)
{var bit__4302__auto__ = (G__20085.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20085.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20085.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20085);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20085);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__20086 = content;if(G__20086)
{var bit__4302__auto__ = (G__20086.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20086.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20086.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20086);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
