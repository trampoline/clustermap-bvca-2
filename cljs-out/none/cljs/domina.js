// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_51788 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_51789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_51790 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_51790,opt_wrapper_51788,table_section_wrapper_51789,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_51788,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_51789,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_51789,cell_wrapper_51790,table_section_wrapper_51789,table_section_wrapper_51789]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__51795 = cljs.core.seq.call(null,tbody);var chunk__51796 = null;var count__51797 = (0);var i__51798 = (0);while(true){
if((i__51798 < count__51797))
{var child = cljs.core._nth.call(null,chunk__51796,i__51798);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51799 = seq__51795;
var G__51800 = chunk__51796;
var G__51801 = count__51797;
var G__51802 = (i__51798 + (1));
seq__51795 = G__51799;
chunk__51796 = G__51800;
count__51797 = G__51801;
i__51798 = G__51802;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51795);if(temp__4126__auto__)
{var seq__51795__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51795__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__51795__$1);{
var G__51803 = cljs.core.chunk_rest.call(null,seq__51795__$1);
var G__51804 = c__4299__auto__;
var G__51805 = cljs.core.count.call(null,c__4299__auto__);
var G__51806 = (0);
seq__51795 = G__51803;
chunk__51796 = G__51804;
count__51797 = G__51805;
i__51798 = G__51806;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__51795__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51807 = cljs.core.next.call(null,seq__51795__$1);
var G__51808 = null;
var G__51809 = (0);
var G__51810 = (0);
seq__51795 = G__51807;
chunk__51796 = G__51808;
count__51797 = G__51809;
i__51798 = G__51810;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__51812 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__51812,(0),null);var start_wrap = cljs.core.nth.call(null,vec__51812,(1),null);var end_wrap = cljs.core.nth.call(null,vec__51812,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__51813 = wrapper.lastChild;
var G__51814 = (level - (1));
wrapper = G__51813;
level = G__51814;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj51816 = {};return obj51816;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__51817){
var mesg = cljs.core.seq(arglist__51817);
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
log.cljs$lang$applyTo = (function (arglist__51818){
var mesg = cljs.core.seq(arglist__51818);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__51819){
var contents = cljs.core.seq(arglist__51819);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__51820_SHARP_){return p1__51820_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__51821_SHARP_,p2__51822_SHARP_){return goog.dom.insertChildAt(p1__51821_SHARP_,p2__51822_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51824_SHARP_,p2__51823_SHARP_){return goog.dom.insertSiblingBefore(p2__51823_SHARP_,p1__51824_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51826_SHARP_,p2__51825_SHARP_){return goog.dom.insertSiblingAfter(p2__51825_SHARP_,p1__51826_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__51828_SHARP_,p2__51827_SHARP_){return goog.dom.replaceNode(p2__51827_SHARP_,p1__51828_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__51833_51837 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51834_51838 = null;var count__51835_51839 = (0);var i__51836_51840 = (0);while(true){
if((i__51836_51840 < count__51835_51839))
{var n_51841 = cljs.core._nth.call(null,chunk__51834_51838,i__51836_51840);goog.style.setStyle(n_51841,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51842 = seq__51833_51837;
var G__51843 = chunk__51834_51838;
var G__51844 = count__51835_51839;
var G__51845 = (i__51836_51840 + (1));
seq__51833_51837 = G__51842;
chunk__51834_51838 = G__51843;
count__51835_51839 = G__51844;
i__51836_51840 = G__51845;
continue;
}
} else
{var temp__4126__auto___51846 = cljs.core.seq.call(null,seq__51833_51837);if(temp__4126__auto___51846)
{var seq__51833_51847__$1 = temp__4126__auto___51846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51833_51847__$1))
{var c__4299__auto___51848 = cljs.core.chunk_first.call(null,seq__51833_51847__$1);{
var G__51849 = cljs.core.chunk_rest.call(null,seq__51833_51847__$1);
var G__51850 = c__4299__auto___51848;
var G__51851 = cljs.core.count.call(null,c__4299__auto___51848);
var G__51852 = (0);
seq__51833_51837 = G__51849;
chunk__51834_51838 = G__51850;
count__51835_51839 = G__51851;
i__51836_51840 = G__51852;
continue;
}
} else
{var n_51853 = cljs.core.first.call(null,seq__51833_51847__$1);goog.style.setStyle(n_51853,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51854 = cljs.core.next.call(null,seq__51833_51847__$1);
var G__51855 = null;
var G__51856 = (0);
var G__51857 = (0);
seq__51833_51837 = G__51854;
chunk__51834_51838 = G__51855;
count__51835_51839 = G__51856;
i__51836_51840 = G__51857;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__51858){
var content = cljs.core.first(arglist__51858);
arglist__51858 = cljs.core.next(arglist__51858);
var name = cljs.core.first(arglist__51858);
var value = cljs.core.rest(arglist__51858);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__51863_51867 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51864_51868 = null;var count__51865_51869 = (0);var i__51866_51870 = (0);while(true){
if((i__51866_51870 < count__51865_51869))
{var n_51871 = cljs.core._nth.call(null,chunk__51864_51868,i__51866_51870);n_51871.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51872 = seq__51863_51867;
var G__51873 = chunk__51864_51868;
var G__51874 = count__51865_51869;
var G__51875 = (i__51866_51870 + (1));
seq__51863_51867 = G__51872;
chunk__51864_51868 = G__51873;
count__51865_51869 = G__51874;
i__51866_51870 = G__51875;
continue;
}
} else
{var temp__4126__auto___51876 = cljs.core.seq.call(null,seq__51863_51867);if(temp__4126__auto___51876)
{var seq__51863_51877__$1 = temp__4126__auto___51876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51863_51877__$1))
{var c__4299__auto___51878 = cljs.core.chunk_first.call(null,seq__51863_51877__$1);{
var G__51879 = cljs.core.chunk_rest.call(null,seq__51863_51877__$1);
var G__51880 = c__4299__auto___51878;
var G__51881 = cljs.core.count.call(null,c__4299__auto___51878);
var G__51882 = (0);
seq__51863_51867 = G__51879;
chunk__51864_51868 = G__51880;
count__51865_51869 = G__51881;
i__51866_51870 = G__51882;
continue;
}
} else
{var n_51883 = cljs.core.first.call(null,seq__51863_51877__$1);n_51883.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51884 = cljs.core.next.call(null,seq__51863_51877__$1);
var G__51885 = null;
var G__51886 = (0);
var G__51887 = (0);
seq__51863_51867 = G__51884;
chunk__51864_51868 = G__51885;
count__51865_51869 = G__51886;
i__51866_51870 = G__51887;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__51888){
var content = cljs.core.first(arglist__51888);
arglist__51888 = cljs.core.next(arglist__51888);
var name = cljs.core.first(arglist__51888);
var value = cljs.core.rest(arglist__51888);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__51893_51897 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51894_51898 = null;var count__51895_51899 = (0);var i__51896_51900 = (0);while(true){
if((i__51896_51900 < count__51895_51899))
{var n_51901 = cljs.core._nth.call(null,chunk__51894_51898,i__51896_51900);n_51901.removeAttribute(cljs.core.name.call(null,name));
{
var G__51902 = seq__51893_51897;
var G__51903 = chunk__51894_51898;
var G__51904 = count__51895_51899;
var G__51905 = (i__51896_51900 + (1));
seq__51893_51897 = G__51902;
chunk__51894_51898 = G__51903;
count__51895_51899 = G__51904;
i__51896_51900 = G__51905;
continue;
}
} else
{var temp__4126__auto___51906 = cljs.core.seq.call(null,seq__51893_51897);if(temp__4126__auto___51906)
{var seq__51893_51907__$1 = temp__4126__auto___51906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51893_51907__$1))
{var c__4299__auto___51908 = cljs.core.chunk_first.call(null,seq__51893_51907__$1);{
var G__51909 = cljs.core.chunk_rest.call(null,seq__51893_51907__$1);
var G__51910 = c__4299__auto___51908;
var G__51911 = cljs.core.count.call(null,c__4299__auto___51908);
var G__51912 = (0);
seq__51893_51897 = G__51909;
chunk__51894_51898 = G__51910;
count__51895_51899 = G__51911;
i__51896_51900 = G__51912;
continue;
}
} else
{var n_51913 = cljs.core.first.call(null,seq__51893_51907__$1);n_51913.removeAttribute(cljs.core.name.call(null,name));
{
var G__51914 = cljs.core.next.call(null,seq__51893_51907__$1);
var G__51915 = null;
var G__51916 = (0);
var G__51917 = (0);
seq__51893_51897 = G__51914;
chunk__51894_51898 = G__51915;
count__51895_51899 = G__51916;
i__51896_51900 = G__51917;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__51919 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__51919,(0),null);var v = cljs.core.nth.call(null,vec__51919,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__51920_SHARP_){var attr = attrs__$1.item(p1__51920_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__51927_51933 = cljs.core.seq.call(null,styles);var chunk__51928_51934 = null;var count__51929_51935 = (0);var i__51930_51936 = (0);while(true){
if((i__51930_51936 < count__51929_51935))
{var vec__51931_51937 = cljs.core._nth.call(null,chunk__51928_51934,i__51930_51936);var name_51938 = cljs.core.nth.call(null,vec__51931_51937,(0),null);var value_51939 = cljs.core.nth.call(null,vec__51931_51937,(1),null);domina.set_style_BANG_.call(null,content,name_51938,value_51939);
{
var G__51940 = seq__51927_51933;
var G__51941 = chunk__51928_51934;
var G__51942 = count__51929_51935;
var G__51943 = (i__51930_51936 + (1));
seq__51927_51933 = G__51940;
chunk__51928_51934 = G__51941;
count__51929_51935 = G__51942;
i__51930_51936 = G__51943;
continue;
}
} else
{var temp__4126__auto___51944 = cljs.core.seq.call(null,seq__51927_51933);if(temp__4126__auto___51944)
{var seq__51927_51945__$1 = temp__4126__auto___51944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51927_51945__$1))
{var c__4299__auto___51946 = cljs.core.chunk_first.call(null,seq__51927_51945__$1);{
var G__51947 = cljs.core.chunk_rest.call(null,seq__51927_51945__$1);
var G__51948 = c__4299__auto___51946;
var G__51949 = cljs.core.count.call(null,c__4299__auto___51946);
var G__51950 = (0);
seq__51927_51933 = G__51947;
chunk__51928_51934 = G__51948;
count__51929_51935 = G__51949;
i__51930_51936 = G__51950;
continue;
}
} else
{var vec__51932_51951 = cljs.core.first.call(null,seq__51927_51945__$1);var name_51952 = cljs.core.nth.call(null,vec__51932_51951,(0),null);var value_51953 = cljs.core.nth.call(null,vec__51932_51951,(1),null);domina.set_style_BANG_.call(null,content,name_51952,value_51953);
{
var G__51954 = cljs.core.next.call(null,seq__51927_51945__$1);
var G__51955 = null;
var G__51956 = (0);
var G__51957 = (0);
seq__51927_51933 = G__51954;
chunk__51928_51934 = G__51955;
count__51929_51935 = G__51956;
i__51930_51936 = G__51957;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__51964_51970 = cljs.core.seq.call(null,attrs);var chunk__51965_51971 = null;var count__51966_51972 = (0);var i__51967_51973 = (0);while(true){
if((i__51967_51973 < count__51966_51972))
{var vec__51968_51974 = cljs.core._nth.call(null,chunk__51965_51971,i__51967_51973);var name_51975 = cljs.core.nth.call(null,vec__51968_51974,(0),null);var value_51976 = cljs.core.nth.call(null,vec__51968_51974,(1),null);domina.set_attr_BANG_.call(null,content,name_51975,value_51976);
{
var G__51977 = seq__51964_51970;
var G__51978 = chunk__51965_51971;
var G__51979 = count__51966_51972;
var G__51980 = (i__51967_51973 + (1));
seq__51964_51970 = G__51977;
chunk__51965_51971 = G__51978;
count__51966_51972 = G__51979;
i__51967_51973 = G__51980;
continue;
}
} else
{var temp__4126__auto___51981 = cljs.core.seq.call(null,seq__51964_51970);if(temp__4126__auto___51981)
{var seq__51964_51982__$1 = temp__4126__auto___51981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51964_51982__$1))
{var c__4299__auto___51983 = cljs.core.chunk_first.call(null,seq__51964_51982__$1);{
var G__51984 = cljs.core.chunk_rest.call(null,seq__51964_51982__$1);
var G__51985 = c__4299__auto___51983;
var G__51986 = cljs.core.count.call(null,c__4299__auto___51983);
var G__51987 = (0);
seq__51964_51970 = G__51984;
chunk__51965_51971 = G__51985;
count__51966_51972 = G__51986;
i__51967_51973 = G__51987;
continue;
}
} else
{var vec__51969_51988 = cljs.core.first.call(null,seq__51964_51982__$1);var name_51989 = cljs.core.nth.call(null,vec__51969_51988,(0),null);var value_51990 = cljs.core.nth.call(null,vec__51969_51988,(1),null);domina.set_attr_BANG_.call(null,content,name_51989,value_51990);
{
var G__51991 = cljs.core.next.call(null,seq__51964_51982__$1);
var G__51992 = null;
var G__51993 = (0);
var G__51994 = (0);
seq__51964_51970 = G__51991;
chunk__51965_51971 = G__51992;
count__51966_51972 = G__51993;
i__51967_51973 = G__51994;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__51999_52003 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52000_52004 = null;var count__52001_52005 = (0);var i__52002_52006 = (0);while(true){
if((i__52002_52006 < count__52001_52005))
{var node_52007 = cljs.core._nth.call(null,chunk__52000_52004,i__52002_52006);goog.dom.classes.add(node_52007,class$);
{
var G__52008 = seq__51999_52003;
var G__52009 = chunk__52000_52004;
var G__52010 = count__52001_52005;
var G__52011 = (i__52002_52006 + (1));
seq__51999_52003 = G__52008;
chunk__52000_52004 = G__52009;
count__52001_52005 = G__52010;
i__52002_52006 = G__52011;
continue;
}
} else
{var temp__4126__auto___52012 = cljs.core.seq.call(null,seq__51999_52003);if(temp__4126__auto___52012)
{var seq__51999_52013__$1 = temp__4126__auto___52012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51999_52013__$1))
{var c__4299__auto___52014 = cljs.core.chunk_first.call(null,seq__51999_52013__$1);{
var G__52015 = cljs.core.chunk_rest.call(null,seq__51999_52013__$1);
var G__52016 = c__4299__auto___52014;
var G__52017 = cljs.core.count.call(null,c__4299__auto___52014);
var G__52018 = (0);
seq__51999_52003 = G__52015;
chunk__52000_52004 = G__52016;
count__52001_52005 = G__52017;
i__52002_52006 = G__52018;
continue;
}
} else
{var node_52019 = cljs.core.first.call(null,seq__51999_52013__$1);goog.dom.classes.add(node_52019,class$);
{
var G__52020 = cljs.core.next.call(null,seq__51999_52013__$1);
var G__52021 = null;
var G__52022 = (0);
var G__52023 = (0);
seq__51999_52003 = G__52020;
chunk__52000_52004 = G__52021;
count__52001_52005 = G__52022;
i__52002_52006 = G__52023;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__52028_52032 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52029_52033 = null;var count__52030_52034 = (0);var i__52031_52035 = (0);while(true){
if((i__52031_52035 < count__52030_52034))
{var node_52036 = cljs.core._nth.call(null,chunk__52029_52033,i__52031_52035);goog.dom.classes.remove(node_52036,class$);
{
var G__52037 = seq__52028_52032;
var G__52038 = chunk__52029_52033;
var G__52039 = count__52030_52034;
var G__52040 = (i__52031_52035 + (1));
seq__52028_52032 = G__52037;
chunk__52029_52033 = G__52038;
count__52030_52034 = G__52039;
i__52031_52035 = G__52040;
continue;
}
} else
{var temp__4126__auto___52041 = cljs.core.seq.call(null,seq__52028_52032);if(temp__4126__auto___52041)
{var seq__52028_52042__$1 = temp__4126__auto___52041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52028_52042__$1))
{var c__4299__auto___52043 = cljs.core.chunk_first.call(null,seq__52028_52042__$1);{
var G__52044 = cljs.core.chunk_rest.call(null,seq__52028_52042__$1);
var G__52045 = c__4299__auto___52043;
var G__52046 = cljs.core.count.call(null,c__4299__auto___52043);
var G__52047 = (0);
seq__52028_52032 = G__52044;
chunk__52029_52033 = G__52045;
count__52030_52034 = G__52046;
i__52031_52035 = G__52047;
continue;
}
} else
{var node_52048 = cljs.core.first.call(null,seq__52028_52042__$1);goog.dom.classes.remove(node_52048,class$);
{
var G__52049 = cljs.core.next.call(null,seq__52028_52042__$1);
var G__52050 = null;
var G__52051 = (0);
var G__52052 = (0);
seq__52028_52032 = G__52049;
chunk__52029_52033 = G__52050;
count__52030_52034 = G__52051;
i__52031_52035 = G__52052;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__52057_52061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52058_52062 = null;var count__52059_52063 = (0);var i__52060_52064 = (0);while(true){
if((i__52060_52064 < count__52059_52063))
{var node_52065 = cljs.core._nth.call(null,chunk__52058_52062,i__52060_52064);goog.dom.classes.toggle(node_52065,class$);
{
var G__52066 = seq__52057_52061;
var G__52067 = chunk__52058_52062;
var G__52068 = count__52059_52063;
var G__52069 = (i__52060_52064 + (1));
seq__52057_52061 = G__52066;
chunk__52058_52062 = G__52067;
count__52059_52063 = G__52068;
i__52060_52064 = G__52069;
continue;
}
} else
{var temp__4126__auto___52070 = cljs.core.seq.call(null,seq__52057_52061);if(temp__4126__auto___52070)
{var seq__52057_52071__$1 = temp__4126__auto___52070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52057_52071__$1))
{var c__4299__auto___52072 = cljs.core.chunk_first.call(null,seq__52057_52071__$1);{
var G__52073 = cljs.core.chunk_rest.call(null,seq__52057_52071__$1);
var G__52074 = c__4299__auto___52072;
var G__52075 = cljs.core.count.call(null,c__4299__auto___52072);
var G__52076 = (0);
seq__52057_52061 = G__52073;
chunk__52058_52062 = G__52074;
count__52059_52063 = G__52075;
i__52060_52064 = G__52076;
continue;
}
} else
{var node_52077 = cljs.core.first.call(null,seq__52057_52071__$1);goog.dom.classes.toggle(node_52077,class$);
{
var G__52078 = cljs.core.next.call(null,seq__52057_52071__$1);
var G__52079 = null;
var G__52080 = (0);
var G__52081 = (0);
seq__52057_52061 = G__52078;
chunk__52058_52062 = G__52079;
count__52059_52063 = G__52080;
i__52060_52064 = G__52081;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_52090__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__52086_52091 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52087_52092 = null;var count__52088_52093 = (0);var i__52089_52094 = (0);while(true){
if((i__52089_52094 < count__52088_52093))
{var node_52095 = cljs.core._nth.call(null,chunk__52087_52092,i__52089_52094);goog.dom.classes.set(node_52095,classes_52090__$1);
{
var G__52096 = seq__52086_52091;
var G__52097 = chunk__52087_52092;
var G__52098 = count__52088_52093;
var G__52099 = (i__52089_52094 + (1));
seq__52086_52091 = G__52096;
chunk__52087_52092 = G__52097;
count__52088_52093 = G__52098;
i__52089_52094 = G__52099;
continue;
}
} else
{var temp__4126__auto___52100 = cljs.core.seq.call(null,seq__52086_52091);if(temp__4126__auto___52100)
{var seq__52086_52101__$1 = temp__4126__auto___52100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52086_52101__$1))
{var c__4299__auto___52102 = cljs.core.chunk_first.call(null,seq__52086_52101__$1);{
var G__52103 = cljs.core.chunk_rest.call(null,seq__52086_52101__$1);
var G__52104 = c__4299__auto___52102;
var G__52105 = cljs.core.count.call(null,c__4299__auto___52102);
var G__52106 = (0);
seq__52086_52091 = G__52103;
chunk__52087_52092 = G__52104;
count__52088_52093 = G__52105;
i__52089_52094 = G__52106;
continue;
}
} else
{var node_52107 = cljs.core.first.call(null,seq__52086_52101__$1);goog.dom.classes.set(node_52107,classes_52090__$1);
{
var G__52108 = cljs.core.next.call(null,seq__52086_52101__$1);
var G__52109 = null;
var G__52110 = (0);
var G__52111 = (0);
seq__52086_52091 = G__52108;
chunk__52087_52092 = G__52109;
count__52088_52093 = G__52110;
i__52089_52094 = G__52111;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__52116_52120 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52117_52121 = null;var count__52118_52122 = (0);var i__52119_52123 = (0);while(true){
if((i__52119_52123 < count__52118_52122))
{var node_52124 = cljs.core._nth.call(null,chunk__52117_52121,i__52119_52123);goog.dom.setTextContent(node_52124,value);
{
var G__52125 = seq__52116_52120;
var G__52126 = chunk__52117_52121;
var G__52127 = count__52118_52122;
var G__52128 = (i__52119_52123 + (1));
seq__52116_52120 = G__52125;
chunk__52117_52121 = G__52126;
count__52118_52122 = G__52127;
i__52119_52123 = G__52128;
continue;
}
} else
{var temp__4126__auto___52129 = cljs.core.seq.call(null,seq__52116_52120);if(temp__4126__auto___52129)
{var seq__52116_52130__$1 = temp__4126__auto___52129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52116_52130__$1))
{var c__4299__auto___52131 = cljs.core.chunk_first.call(null,seq__52116_52130__$1);{
var G__52132 = cljs.core.chunk_rest.call(null,seq__52116_52130__$1);
var G__52133 = c__4299__auto___52131;
var G__52134 = cljs.core.count.call(null,c__4299__auto___52131);
var G__52135 = (0);
seq__52116_52120 = G__52132;
chunk__52117_52121 = G__52133;
count__52118_52122 = G__52134;
i__52119_52123 = G__52135;
continue;
}
} else
{var node_52136 = cljs.core.first.call(null,seq__52116_52130__$1);goog.dom.setTextContent(node_52136,value);
{
var G__52137 = cljs.core.next.call(null,seq__52116_52130__$1);
var G__52138 = null;
var G__52139 = (0);
var G__52140 = (0);
seq__52116_52120 = G__52137;
chunk__52117_52121 = G__52138;
count__52118_52122 = G__52139;
i__52119_52123 = G__52140;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__52145_52149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52146_52150 = null;var count__52147_52151 = (0);var i__52148_52152 = (0);while(true){
if((i__52148_52152 < count__52147_52151))
{var node_52153 = cljs.core._nth.call(null,chunk__52146_52150,i__52148_52152);goog.dom.forms.setValue(node_52153,value);
{
var G__52154 = seq__52145_52149;
var G__52155 = chunk__52146_52150;
var G__52156 = count__52147_52151;
var G__52157 = (i__52148_52152 + (1));
seq__52145_52149 = G__52154;
chunk__52146_52150 = G__52155;
count__52147_52151 = G__52156;
i__52148_52152 = G__52157;
continue;
}
} else
{var temp__4126__auto___52158 = cljs.core.seq.call(null,seq__52145_52149);if(temp__4126__auto___52158)
{var seq__52145_52159__$1 = temp__4126__auto___52158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52145_52159__$1))
{var c__4299__auto___52160 = cljs.core.chunk_first.call(null,seq__52145_52159__$1);{
var G__52161 = cljs.core.chunk_rest.call(null,seq__52145_52159__$1);
var G__52162 = c__4299__auto___52160;
var G__52163 = cljs.core.count.call(null,c__4299__auto___52160);
var G__52164 = (0);
seq__52145_52149 = G__52161;
chunk__52146_52150 = G__52162;
count__52147_52151 = G__52163;
i__52148_52152 = G__52164;
continue;
}
} else
{var node_52165 = cljs.core.first.call(null,seq__52145_52159__$1);goog.dom.forms.setValue(node_52165,value);
{
var G__52166 = cljs.core.next.call(null,seq__52145_52159__$1);
var G__52167 = null;
var G__52168 = (0);
var G__52169 = (0);
seq__52145_52149 = G__52166;
chunk__52146_52150 = G__52167;
count__52147_52151 = G__52168;
i__52148_52152 = G__52169;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_52180 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__52176_52181 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52177_52182 = null;var count__52178_52183 = (0);var i__52179_52184 = (0);while(true){
if((i__52179_52184 < count__52178_52183))
{var node_52185 = cljs.core._nth.call(null,chunk__52177_52182,i__52179_52184);node_52185.innerHTML = value_52180;
{
var G__52186 = seq__52176_52181;
var G__52187 = chunk__52177_52182;
var G__52188 = count__52178_52183;
var G__52189 = (i__52179_52184 + (1));
seq__52176_52181 = G__52186;
chunk__52177_52182 = G__52187;
count__52178_52183 = G__52188;
i__52179_52184 = G__52189;
continue;
}
} else
{var temp__4126__auto___52190 = cljs.core.seq.call(null,seq__52176_52181);if(temp__4126__auto___52190)
{var seq__52176_52191__$1 = temp__4126__auto___52190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52176_52191__$1))
{var c__4299__auto___52192 = cljs.core.chunk_first.call(null,seq__52176_52191__$1);{
var G__52193 = cljs.core.chunk_rest.call(null,seq__52176_52191__$1);
var G__52194 = c__4299__auto___52192;
var G__52195 = cljs.core.count.call(null,c__4299__auto___52192);
var G__52196 = (0);
seq__52176_52181 = G__52193;
chunk__52177_52182 = G__52194;
count__52178_52183 = G__52195;
i__52179_52184 = G__52196;
continue;
}
} else
{var node_52197 = cljs.core.first.call(null,seq__52176_52191__$1);node_52197.innerHTML = value_52180;
{
var G__52198 = cljs.core.next.call(null,seq__52176_52191__$1);
var G__52199 = null;
var G__52200 = (0);
var G__52201 = (0);
seq__52176_52181 = G__52198;
chunk__52177_52182 = G__52199;
count__52178_52183 = G__52200;
i__52179_52184 = G__52201;
continue;
}
}
} else
{}
}
break;
}
}catch (e52175){if((e52175 instanceof Error))
{var e_52202 = e52175;domina.replace_children_BANG_.call(null,content,value_52180);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52175;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__52209_52213 = cljs.core.seq.call(null,children);var chunk__52210_52214 = null;var count__52211_52215 = (0);var i__52212_52216 = (0);while(true){
if((i__52212_52216 < count__52211_52215))
{var child_52217 = cljs.core._nth.call(null,chunk__52210_52214,i__52212_52216);frag.appendChild(child_52217);
{
var G__52218 = seq__52209_52213;
var G__52219 = chunk__52210_52214;
var G__52220 = count__52211_52215;
var G__52221 = (i__52212_52216 + (1));
seq__52209_52213 = G__52218;
chunk__52210_52214 = G__52219;
count__52211_52215 = G__52220;
i__52212_52216 = G__52221;
continue;
}
} else
{var temp__4126__auto___52222 = cljs.core.seq.call(null,seq__52209_52213);if(temp__4126__auto___52222)
{var seq__52209_52223__$1 = temp__4126__auto___52222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52209_52223__$1))
{var c__4299__auto___52224 = cljs.core.chunk_first.call(null,seq__52209_52223__$1);{
var G__52225 = cljs.core.chunk_rest.call(null,seq__52209_52223__$1);
var G__52226 = c__4299__auto___52224;
var G__52227 = cljs.core.count.call(null,c__4299__auto___52224);
var G__52228 = (0);
seq__52209_52213 = G__52225;
chunk__52210_52214 = G__52226;
count__52211_52215 = G__52227;
i__52212_52216 = G__52228;
continue;
}
} else
{var child_52229 = cljs.core.first.call(null,seq__52209_52223__$1);frag.appendChild(child_52229);
{
var G__52230 = cljs.core.next.call(null,seq__52209_52223__$1);
var G__52231 = null;
var G__52232 = (0);
var G__52233 = (0);
seq__52209_52213 = G__52230;
chunk__52210_52214 = G__52231;
count__52211_52215 = G__52232;
i__52212_52216 = G__52233;
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
return (function (p1__52203_SHARP_,p2__52204_SHARP_){return f.call(null,p1__52203_SHARP_,p2__52204_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__52235 = list_thing;if(G__52235)
{var bit__4193__auto__ = (G__52235.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__52235.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52235);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52235);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__52236 = content;if(G__52236)
{var bit__4193__auto__ = (G__52236.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__52236.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52236);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__52237 = content;if(G__52237)
{var bit__4193__auto__ = (G__52237.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__52237.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52237.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52237);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52237);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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