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
var opt_wrapper_16752 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16753 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16754 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16753,table_section_wrapper_16753,opt_wrapper_16752,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16754,table_section_wrapper_16753,cell_wrapper_16754,opt_wrapper_16752,table_section_wrapper_16753,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16753]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16759 = cljs.core.seq.call(null,tbody);var chunk__16760 = null;var count__16761 = 0;var i__16762 = 0;while(true){
if((i__16762 < count__16761))
{var child = cljs.core._nth.call(null,chunk__16760,i__16762);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16763 = seq__16759;
var G__16764 = chunk__16760;
var G__16765 = count__16761;
var G__16766 = (i__16762 + 1);
seq__16759 = G__16763;
chunk__16760 = G__16764;
count__16761 = G__16765;
i__16762 = G__16766;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16759);if(temp__4092__auto__)
{var seq__16759__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16759__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16759__$1);{
var G__16767 = cljs.core.chunk_rest.call(null,seq__16759__$1);
var G__16768 = c__4148__auto__;
var G__16769 = cljs.core.count.call(null,c__4148__auto__);
var G__16770 = 0;
seq__16759 = G__16767;
chunk__16760 = G__16768;
count__16761 = G__16769;
i__16762 = G__16770;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16759__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16771 = cljs.core.next.call(null,seq__16759__$1);
var G__16772 = null;
var G__16773 = 0;
var G__16774 = 0;
seq__16759 = G__16771;
chunk__16760 = G__16772;
count__16761 = G__16773;
i__16762 = G__16774;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16776 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16776,0,null);var start_wrap = cljs.core.nth.call(null,vec__16776,1,null);var end_wrap = cljs.core.nth.call(null,vec__16776,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16777 = wrapper.lastChild;
var G__16778 = (level - 1);
wrapper = G__16777;
level = G__16778;
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
domina.DomContent = (function (){var obj16780 = {};return obj16780;
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
log_debug.cljs$lang$applyTo = (function (arglist__16781){
var mesg = cljs.core.seq(arglist__16781);
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
log.cljs$lang$applyTo = (function (arglist__16782){
var mesg = cljs.core.seq(arglist__16782);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16783){
var contents = cljs.core.seq(arglist__16783);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16784_SHARP_){return p1__16784_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16785_SHARP_,p2__16786_SHARP_){return goog.dom.insertChildAt(p1__16785_SHARP_,p2__16786_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16788_SHARP_,p2__16787_SHARP_){return goog.dom.insertSiblingBefore(p2__16787_SHARP_,p1__16788_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16790_SHARP_,p2__16789_SHARP_){return goog.dom.insertSiblingAfter(p2__16789_SHARP_,p1__16790_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16792_SHARP_,p2__16791_SHARP_){return goog.dom.replaceNode(p2__16791_SHARP_,p1__16792_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16797_16801 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16798_16802 = null;var count__16799_16803 = 0;var i__16800_16804 = 0;while(true){
if((i__16800_16804 < count__16799_16803))
{var n_16805 = cljs.core._nth.call(null,chunk__16798_16802,i__16800_16804);goog.style.setStyle(n_16805,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16806 = seq__16797_16801;
var G__16807 = chunk__16798_16802;
var G__16808 = count__16799_16803;
var G__16809 = (i__16800_16804 + 1);
seq__16797_16801 = G__16806;
chunk__16798_16802 = G__16807;
count__16799_16803 = G__16808;
i__16800_16804 = G__16809;
continue;
}
} else
{var temp__4092__auto___16810 = cljs.core.seq.call(null,seq__16797_16801);if(temp__4092__auto___16810)
{var seq__16797_16811__$1 = temp__4092__auto___16810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16797_16811__$1))
{var c__4148__auto___16812 = cljs.core.chunk_first.call(null,seq__16797_16811__$1);{
var G__16813 = cljs.core.chunk_rest.call(null,seq__16797_16811__$1);
var G__16814 = c__4148__auto___16812;
var G__16815 = cljs.core.count.call(null,c__4148__auto___16812);
var G__16816 = 0;
seq__16797_16801 = G__16813;
chunk__16798_16802 = G__16814;
count__16799_16803 = G__16815;
i__16800_16804 = G__16816;
continue;
}
} else
{var n_16817 = cljs.core.first.call(null,seq__16797_16811__$1);goog.style.setStyle(n_16817,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16818 = cljs.core.next.call(null,seq__16797_16811__$1);
var G__16819 = null;
var G__16820 = 0;
var G__16821 = 0;
seq__16797_16801 = G__16818;
chunk__16798_16802 = G__16819;
count__16799_16803 = G__16820;
i__16800_16804 = G__16821;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16822){
var content = cljs.core.first(arglist__16822);
arglist__16822 = cljs.core.next(arglist__16822);
var name = cljs.core.first(arglist__16822);
var value = cljs.core.rest(arglist__16822);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16827_16831 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16828_16832 = null;var count__16829_16833 = 0;var i__16830_16834 = 0;while(true){
if((i__16830_16834 < count__16829_16833))
{var n_16835 = cljs.core._nth.call(null,chunk__16828_16832,i__16830_16834);n_16835.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16836 = seq__16827_16831;
var G__16837 = chunk__16828_16832;
var G__16838 = count__16829_16833;
var G__16839 = (i__16830_16834 + 1);
seq__16827_16831 = G__16836;
chunk__16828_16832 = G__16837;
count__16829_16833 = G__16838;
i__16830_16834 = G__16839;
continue;
}
} else
{var temp__4092__auto___16840 = cljs.core.seq.call(null,seq__16827_16831);if(temp__4092__auto___16840)
{var seq__16827_16841__$1 = temp__4092__auto___16840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16827_16841__$1))
{var c__4148__auto___16842 = cljs.core.chunk_first.call(null,seq__16827_16841__$1);{
var G__16843 = cljs.core.chunk_rest.call(null,seq__16827_16841__$1);
var G__16844 = c__4148__auto___16842;
var G__16845 = cljs.core.count.call(null,c__4148__auto___16842);
var G__16846 = 0;
seq__16827_16831 = G__16843;
chunk__16828_16832 = G__16844;
count__16829_16833 = G__16845;
i__16830_16834 = G__16846;
continue;
}
} else
{var n_16847 = cljs.core.first.call(null,seq__16827_16841__$1);n_16847.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16848 = cljs.core.next.call(null,seq__16827_16841__$1);
var G__16849 = null;
var G__16850 = 0;
var G__16851 = 0;
seq__16827_16831 = G__16848;
chunk__16828_16832 = G__16849;
count__16829_16833 = G__16850;
i__16830_16834 = G__16851;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16852){
var content = cljs.core.first(arglist__16852);
arglist__16852 = cljs.core.next(arglist__16852);
var name = cljs.core.first(arglist__16852);
var value = cljs.core.rest(arglist__16852);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16857_16861 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16858_16862 = null;var count__16859_16863 = 0;var i__16860_16864 = 0;while(true){
if((i__16860_16864 < count__16859_16863))
{var n_16865 = cljs.core._nth.call(null,chunk__16858_16862,i__16860_16864);n_16865.removeAttribute(cljs.core.name.call(null,name));
{
var G__16866 = seq__16857_16861;
var G__16867 = chunk__16858_16862;
var G__16868 = count__16859_16863;
var G__16869 = (i__16860_16864 + 1);
seq__16857_16861 = G__16866;
chunk__16858_16862 = G__16867;
count__16859_16863 = G__16868;
i__16860_16864 = G__16869;
continue;
}
} else
{var temp__4092__auto___16870 = cljs.core.seq.call(null,seq__16857_16861);if(temp__4092__auto___16870)
{var seq__16857_16871__$1 = temp__4092__auto___16870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16857_16871__$1))
{var c__4148__auto___16872 = cljs.core.chunk_first.call(null,seq__16857_16871__$1);{
var G__16873 = cljs.core.chunk_rest.call(null,seq__16857_16871__$1);
var G__16874 = c__4148__auto___16872;
var G__16875 = cljs.core.count.call(null,c__4148__auto___16872);
var G__16876 = 0;
seq__16857_16861 = G__16873;
chunk__16858_16862 = G__16874;
count__16859_16863 = G__16875;
i__16860_16864 = G__16876;
continue;
}
} else
{var n_16877 = cljs.core.first.call(null,seq__16857_16871__$1);n_16877.removeAttribute(cljs.core.name.call(null,name));
{
var G__16878 = cljs.core.next.call(null,seq__16857_16871__$1);
var G__16879 = null;
var G__16880 = 0;
var G__16881 = 0;
seq__16857_16861 = G__16878;
chunk__16858_16862 = G__16879;
count__16859_16863 = G__16880;
i__16860_16864 = G__16881;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16883 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16883,0,null);var v = cljs.core.nth.call(null,vec__16883,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16884_SHARP_){var attr = attrs__$1.item(p1__16884_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16891_16897 = cljs.core.seq.call(null,styles);var chunk__16892_16898 = null;var count__16893_16899 = 0;var i__16894_16900 = 0;while(true){
if((i__16894_16900 < count__16893_16899))
{var vec__16895_16901 = cljs.core._nth.call(null,chunk__16892_16898,i__16894_16900);var name_16902 = cljs.core.nth.call(null,vec__16895_16901,0,null);var value_16903 = cljs.core.nth.call(null,vec__16895_16901,1,null);domina.set_style_BANG_.call(null,content,name_16902,value_16903);
{
var G__16904 = seq__16891_16897;
var G__16905 = chunk__16892_16898;
var G__16906 = count__16893_16899;
var G__16907 = (i__16894_16900 + 1);
seq__16891_16897 = G__16904;
chunk__16892_16898 = G__16905;
count__16893_16899 = G__16906;
i__16894_16900 = G__16907;
continue;
}
} else
{var temp__4092__auto___16908 = cljs.core.seq.call(null,seq__16891_16897);if(temp__4092__auto___16908)
{var seq__16891_16909__$1 = temp__4092__auto___16908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16891_16909__$1))
{var c__4148__auto___16910 = cljs.core.chunk_first.call(null,seq__16891_16909__$1);{
var G__16911 = cljs.core.chunk_rest.call(null,seq__16891_16909__$1);
var G__16912 = c__4148__auto___16910;
var G__16913 = cljs.core.count.call(null,c__4148__auto___16910);
var G__16914 = 0;
seq__16891_16897 = G__16911;
chunk__16892_16898 = G__16912;
count__16893_16899 = G__16913;
i__16894_16900 = G__16914;
continue;
}
} else
{var vec__16896_16915 = cljs.core.first.call(null,seq__16891_16909__$1);var name_16916 = cljs.core.nth.call(null,vec__16896_16915,0,null);var value_16917 = cljs.core.nth.call(null,vec__16896_16915,1,null);domina.set_style_BANG_.call(null,content,name_16916,value_16917);
{
var G__16918 = cljs.core.next.call(null,seq__16891_16909__$1);
var G__16919 = null;
var G__16920 = 0;
var G__16921 = 0;
seq__16891_16897 = G__16918;
chunk__16892_16898 = G__16919;
count__16893_16899 = G__16920;
i__16894_16900 = G__16921;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16928_16934 = cljs.core.seq.call(null,attrs);var chunk__16929_16935 = null;var count__16930_16936 = 0;var i__16931_16937 = 0;while(true){
if((i__16931_16937 < count__16930_16936))
{var vec__16932_16938 = cljs.core._nth.call(null,chunk__16929_16935,i__16931_16937);var name_16939 = cljs.core.nth.call(null,vec__16932_16938,0,null);var value_16940 = cljs.core.nth.call(null,vec__16932_16938,1,null);domina.set_attr_BANG_.call(null,content,name_16939,value_16940);
{
var G__16941 = seq__16928_16934;
var G__16942 = chunk__16929_16935;
var G__16943 = count__16930_16936;
var G__16944 = (i__16931_16937 + 1);
seq__16928_16934 = G__16941;
chunk__16929_16935 = G__16942;
count__16930_16936 = G__16943;
i__16931_16937 = G__16944;
continue;
}
} else
{var temp__4092__auto___16945 = cljs.core.seq.call(null,seq__16928_16934);if(temp__4092__auto___16945)
{var seq__16928_16946__$1 = temp__4092__auto___16945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16928_16946__$1))
{var c__4148__auto___16947 = cljs.core.chunk_first.call(null,seq__16928_16946__$1);{
var G__16948 = cljs.core.chunk_rest.call(null,seq__16928_16946__$1);
var G__16949 = c__4148__auto___16947;
var G__16950 = cljs.core.count.call(null,c__4148__auto___16947);
var G__16951 = 0;
seq__16928_16934 = G__16948;
chunk__16929_16935 = G__16949;
count__16930_16936 = G__16950;
i__16931_16937 = G__16951;
continue;
}
} else
{var vec__16933_16952 = cljs.core.first.call(null,seq__16928_16946__$1);var name_16953 = cljs.core.nth.call(null,vec__16933_16952,0,null);var value_16954 = cljs.core.nth.call(null,vec__16933_16952,1,null);domina.set_attr_BANG_.call(null,content,name_16953,value_16954);
{
var G__16955 = cljs.core.next.call(null,seq__16928_16946__$1);
var G__16956 = null;
var G__16957 = 0;
var G__16958 = 0;
seq__16928_16934 = G__16955;
chunk__16929_16935 = G__16956;
count__16930_16936 = G__16957;
i__16931_16937 = G__16958;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16963_16967 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16964_16968 = null;var count__16965_16969 = 0;var i__16966_16970 = 0;while(true){
if((i__16966_16970 < count__16965_16969))
{var node_16971 = cljs.core._nth.call(null,chunk__16964_16968,i__16966_16970);goog.dom.classes.add(node_16971,class$);
{
var G__16972 = seq__16963_16967;
var G__16973 = chunk__16964_16968;
var G__16974 = count__16965_16969;
var G__16975 = (i__16966_16970 + 1);
seq__16963_16967 = G__16972;
chunk__16964_16968 = G__16973;
count__16965_16969 = G__16974;
i__16966_16970 = G__16975;
continue;
}
} else
{var temp__4092__auto___16976 = cljs.core.seq.call(null,seq__16963_16967);if(temp__4092__auto___16976)
{var seq__16963_16977__$1 = temp__4092__auto___16976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16963_16977__$1))
{var c__4148__auto___16978 = cljs.core.chunk_first.call(null,seq__16963_16977__$1);{
var G__16979 = cljs.core.chunk_rest.call(null,seq__16963_16977__$1);
var G__16980 = c__4148__auto___16978;
var G__16981 = cljs.core.count.call(null,c__4148__auto___16978);
var G__16982 = 0;
seq__16963_16967 = G__16979;
chunk__16964_16968 = G__16980;
count__16965_16969 = G__16981;
i__16966_16970 = G__16982;
continue;
}
} else
{var node_16983 = cljs.core.first.call(null,seq__16963_16977__$1);goog.dom.classes.add(node_16983,class$);
{
var G__16984 = cljs.core.next.call(null,seq__16963_16977__$1);
var G__16985 = null;
var G__16986 = 0;
var G__16987 = 0;
seq__16963_16967 = G__16984;
chunk__16964_16968 = G__16985;
count__16965_16969 = G__16986;
i__16966_16970 = G__16987;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16992_16996 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16993_16997 = null;var count__16994_16998 = 0;var i__16995_16999 = 0;while(true){
if((i__16995_16999 < count__16994_16998))
{var node_17000 = cljs.core._nth.call(null,chunk__16993_16997,i__16995_16999);goog.dom.classes.remove(node_17000,class$);
{
var G__17001 = seq__16992_16996;
var G__17002 = chunk__16993_16997;
var G__17003 = count__16994_16998;
var G__17004 = (i__16995_16999 + 1);
seq__16992_16996 = G__17001;
chunk__16993_16997 = G__17002;
count__16994_16998 = G__17003;
i__16995_16999 = G__17004;
continue;
}
} else
{var temp__4092__auto___17005 = cljs.core.seq.call(null,seq__16992_16996);if(temp__4092__auto___17005)
{var seq__16992_17006__$1 = temp__4092__auto___17005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16992_17006__$1))
{var c__4148__auto___17007 = cljs.core.chunk_first.call(null,seq__16992_17006__$1);{
var G__17008 = cljs.core.chunk_rest.call(null,seq__16992_17006__$1);
var G__17009 = c__4148__auto___17007;
var G__17010 = cljs.core.count.call(null,c__4148__auto___17007);
var G__17011 = 0;
seq__16992_16996 = G__17008;
chunk__16993_16997 = G__17009;
count__16994_16998 = G__17010;
i__16995_16999 = G__17011;
continue;
}
} else
{var node_17012 = cljs.core.first.call(null,seq__16992_17006__$1);goog.dom.classes.remove(node_17012,class$);
{
var G__17013 = cljs.core.next.call(null,seq__16992_17006__$1);
var G__17014 = null;
var G__17015 = 0;
var G__17016 = 0;
seq__16992_16996 = G__17013;
chunk__16993_16997 = G__17014;
count__16994_16998 = G__17015;
i__16995_16999 = G__17016;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17021_17025 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17022_17026 = null;var count__17023_17027 = 0;var i__17024_17028 = 0;while(true){
if((i__17024_17028 < count__17023_17027))
{var node_17029 = cljs.core._nth.call(null,chunk__17022_17026,i__17024_17028);goog.dom.classes.toggle(node_17029,class$);
{
var G__17030 = seq__17021_17025;
var G__17031 = chunk__17022_17026;
var G__17032 = count__17023_17027;
var G__17033 = (i__17024_17028 + 1);
seq__17021_17025 = G__17030;
chunk__17022_17026 = G__17031;
count__17023_17027 = G__17032;
i__17024_17028 = G__17033;
continue;
}
} else
{var temp__4092__auto___17034 = cljs.core.seq.call(null,seq__17021_17025);if(temp__4092__auto___17034)
{var seq__17021_17035__$1 = temp__4092__auto___17034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17021_17035__$1))
{var c__4148__auto___17036 = cljs.core.chunk_first.call(null,seq__17021_17035__$1);{
var G__17037 = cljs.core.chunk_rest.call(null,seq__17021_17035__$1);
var G__17038 = c__4148__auto___17036;
var G__17039 = cljs.core.count.call(null,c__4148__auto___17036);
var G__17040 = 0;
seq__17021_17025 = G__17037;
chunk__17022_17026 = G__17038;
count__17023_17027 = G__17039;
i__17024_17028 = G__17040;
continue;
}
} else
{var node_17041 = cljs.core.first.call(null,seq__17021_17035__$1);goog.dom.classes.toggle(node_17041,class$);
{
var G__17042 = cljs.core.next.call(null,seq__17021_17035__$1);
var G__17043 = null;
var G__17044 = 0;
var G__17045 = 0;
seq__17021_17025 = G__17042;
chunk__17022_17026 = G__17043;
count__17023_17027 = G__17044;
i__17024_17028 = G__17045;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17054__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17050_17055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17051_17056 = null;var count__17052_17057 = 0;var i__17053_17058 = 0;while(true){
if((i__17053_17058 < count__17052_17057))
{var node_17059 = cljs.core._nth.call(null,chunk__17051_17056,i__17053_17058);goog.dom.classes.set(node_17059,classes_17054__$1);
{
var G__17060 = seq__17050_17055;
var G__17061 = chunk__17051_17056;
var G__17062 = count__17052_17057;
var G__17063 = (i__17053_17058 + 1);
seq__17050_17055 = G__17060;
chunk__17051_17056 = G__17061;
count__17052_17057 = G__17062;
i__17053_17058 = G__17063;
continue;
}
} else
{var temp__4092__auto___17064 = cljs.core.seq.call(null,seq__17050_17055);if(temp__4092__auto___17064)
{var seq__17050_17065__$1 = temp__4092__auto___17064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17050_17065__$1))
{var c__4148__auto___17066 = cljs.core.chunk_first.call(null,seq__17050_17065__$1);{
var G__17067 = cljs.core.chunk_rest.call(null,seq__17050_17065__$1);
var G__17068 = c__4148__auto___17066;
var G__17069 = cljs.core.count.call(null,c__4148__auto___17066);
var G__17070 = 0;
seq__17050_17055 = G__17067;
chunk__17051_17056 = G__17068;
count__17052_17057 = G__17069;
i__17053_17058 = G__17070;
continue;
}
} else
{var node_17071 = cljs.core.first.call(null,seq__17050_17065__$1);goog.dom.classes.set(node_17071,classes_17054__$1);
{
var G__17072 = cljs.core.next.call(null,seq__17050_17065__$1);
var G__17073 = null;
var G__17074 = 0;
var G__17075 = 0;
seq__17050_17055 = G__17072;
chunk__17051_17056 = G__17073;
count__17052_17057 = G__17074;
i__17053_17058 = G__17075;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17080_17084 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17081_17085 = null;var count__17082_17086 = 0;var i__17083_17087 = 0;while(true){
if((i__17083_17087 < count__17082_17086))
{var node_17088 = cljs.core._nth.call(null,chunk__17081_17085,i__17083_17087);goog.dom.setTextContent(node_17088,value);
{
var G__17089 = seq__17080_17084;
var G__17090 = chunk__17081_17085;
var G__17091 = count__17082_17086;
var G__17092 = (i__17083_17087 + 1);
seq__17080_17084 = G__17089;
chunk__17081_17085 = G__17090;
count__17082_17086 = G__17091;
i__17083_17087 = G__17092;
continue;
}
} else
{var temp__4092__auto___17093 = cljs.core.seq.call(null,seq__17080_17084);if(temp__4092__auto___17093)
{var seq__17080_17094__$1 = temp__4092__auto___17093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17080_17094__$1))
{var c__4148__auto___17095 = cljs.core.chunk_first.call(null,seq__17080_17094__$1);{
var G__17096 = cljs.core.chunk_rest.call(null,seq__17080_17094__$1);
var G__17097 = c__4148__auto___17095;
var G__17098 = cljs.core.count.call(null,c__4148__auto___17095);
var G__17099 = 0;
seq__17080_17084 = G__17096;
chunk__17081_17085 = G__17097;
count__17082_17086 = G__17098;
i__17083_17087 = G__17099;
continue;
}
} else
{var node_17100 = cljs.core.first.call(null,seq__17080_17094__$1);goog.dom.setTextContent(node_17100,value);
{
var G__17101 = cljs.core.next.call(null,seq__17080_17094__$1);
var G__17102 = null;
var G__17103 = 0;
var G__17104 = 0;
seq__17080_17084 = G__17101;
chunk__17081_17085 = G__17102;
count__17082_17086 = G__17103;
i__17083_17087 = G__17104;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17109_17113 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17110_17114 = null;var count__17111_17115 = 0;var i__17112_17116 = 0;while(true){
if((i__17112_17116 < count__17111_17115))
{var node_17117 = cljs.core._nth.call(null,chunk__17110_17114,i__17112_17116);goog.dom.forms.setValue(node_17117,value);
{
var G__17118 = seq__17109_17113;
var G__17119 = chunk__17110_17114;
var G__17120 = count__17111_17115;
var G__17121 = (i__17112_17116 + 1);
seq__17109_17113 = G__17118;
chunk__17110_17114 = G__17119;
count__17111_17115 = G__17120;
i__17112_17116 = G__17121;
continue;
}
} else
{var temp__4092__auto___17122 = cljs.core.seq.call(null,seq__17109_17113);if(temp__4092__auto___17122)
{var seq__17109_17123__$1 = temp__4092__auto___17122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17109_17123__$1))
{var c__4148__auto___17124 = cljs.core.chunk_first.call(null,seq__17109_17123__$1);{
var G__17125 = cljs.core.chunk_rest.call(null,seq__17109_17123__$1);
var G__17126 = c__4148__auto___17124;
var G__17127 = cljs.core.count.call(null,c__4148__auto___17124);
var G__17128 = 0;
seq__17109_17113 = G__17125;
chunk__17110_17114 = G__17126;
count__17111_17115 = G__17127;
i__17112_17116 = G__17128;
continue;
}
} else
{var node_17129 = cljs.core.first.call(null,seq__17109_17123__$1);goog.dom.forms.setValue(node_17129,value);
{
var G__17130 = cljs.core.next.call(null,seq__17109_17123__$1);
var G__17131 = null;
var G__17132 = 0;
var G__17133 = 0;
seq__17109_17113 = G__17130;
chunk__17110_17114 = G__17131;
count__17111_17115 = G__17132;
i__17112_17116 = G__17133;
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
{var value_17144 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17140_17145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17141_17146 = null;var count__17142_17147 = 0;var i__17143_17148 = 0;while(true){
if((i__17143_17148 < count__17142_17147))
{var node_17149 = cljs.core._nth.call(null,chunk__17141_17146,i__17143_17148);node_17149.innerHTML = value_17144;
{
var G__17150 = seq__17140_17145;
var G__17151 = chunk__17141_17146;
var G__17152 = count__17142_17147;
var G__17153 = (i__17143_17148 + 1);
seq__17140_17145 = G__17150;
chunk__17141_17146 = G__17151;
count__17142_17147 = G__17152;
i__17143_17148 = G__17153;
continue;
}
} else
{var temp__4092__auto___17154 = cljs.core.seq.call(null,seq__17140_17145);if(temp__4092__auto___17154)
{var seq__17140_17155__$1 = temp__4092__auto___17154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17140_17155__$1))
{var c__4148__auto___17156 = cljs.core.chunk_first.call(null,seq__17140_17155__$1);{
var G__17157 = cljs.core.chunk_rest.call(null,seq__17140_17155__$1);
var G__17158 = c__4148__auto___17156;
var G__17159 = cljs.core.count.call(null,c__4148__auto___17156);
var G__17160 = 0;
seq__17140_17145 = G__17157;
chunk__17141_17146 = G__17158;
count__17142_17147 = G__17159;
i__17143_17148 = G__17160;
continue;
}
} else
{var node_17161 = cljs.core.first.call(null,seq__17140_17155__$1);node_17161.innerHTML = value_17144;
{
var G__17162 = cljs.core.next.call(null,seq__17140_17155__$1);
var G__17163 = null;
var G__17164 = 0;
var G__17165 = 0;
seq__17140_17145 = G__17162;
chunk__17141_17146 = G__17163;
count__17142_17147 = G__17164;
i__17143_17148 = G__17165;
continue;
}
}
} else
{}
}
break;
}
}catch (e17139){if((e17139 instanceof Error))
{var e_17166 = e17139;domina.replace_children_BANG_.call(null,content,value_17144);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17139;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17173_17177 = cljs.core.seq.call(null,children);var chunk__17174_17178 = null;var count__17175_17179 = 0;var i__17176_17180 = 0;while(true){
if((i__17176_17180 < count__17175_17179))
{var child_17181 = cljs.core._nth.call(null,chunk__17174_17178,i__17176_17180);frag.appendChild(child_17181);
{
var G__17182 = seq__17173_17177;
var G__17183 = chunk__17174_17178;
var G__17184 = count__17175_17179;
var G__17185 = (i__17176_17180 + 1);
seq__17173_17177 = G__17182;
chunk__17174_17178 = G__17183;
count__17175_17179 = G__17184;
i__17176_17180 = G__17185;
continue;
}
} else
{var temp__4092__auto___17186 = cljs.core.seq.call(null,seq__17173_17177);if(temp__4092__auto___17186)
{var seq__17173_17187__$1 = temp__4092__auto___17186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17173_17187__$1))
{var c__4148__auto___17188 = cljs.core.chunk_first.call(null,seq__17173_17187__$1);{
var G__17189 = cljs.core.chunk_rest.call(null,seq__17173_17187__$1);
var G__17190 = c__4148__auto___17188;
var G__17191 = cljs.core.count.call(null,c__4148__auto___17188);
var G__17192 = 0;
seq__17173_17177 = G__17189;
chunk__17174_17178 = G__17190;
count__17175_17179 = G__17191;
i__17176_17180 = G__17192;
continue;
}
} else
{var child_17193 = cljs.core.first.call(null,seq__17173_17187__$1);frag.appendChild(child_17193);
{
var G__17194 = cljs.core.next.call(null,seq__17173_17187__$1);
var G__17195 = null;
var G__17196 = 0;
var G__17197 = 0;
seq__17173_17177 = G__17194;
chunk__17174_17178 = G__17195;
count__17175_17179 = G__17196;
i__17176_17180 = G__17197;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17167_SHARP_,p2__17168_SHARP_){return f.call(null,p1__17167_SHARP_,p2__17168_SHARP_);
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
{if((function (){var G__17199 = list_thing;if(G__17199)
{var bit__4050__auto__ = (G__17199.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17199.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17199.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17199);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17199);
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
{if((function (){var G__17200 = content;if(G__17200)
{var bit__4050__auto__ = (G__17200.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17200.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17200.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17200);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17200);
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
{if((function (){var G__17201 = content;if(G__17201)
{var bit__4050__auto__ = (G__17201.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17201.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17201.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17201);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17201);
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

//# sourceMappingURL=domina.js.map